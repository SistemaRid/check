(function () {
  function parseLocalDate(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
      return null;
    }

    const [year, month, day] = String(value).split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatMonthRange(monthValue) {
    if (!monthValue || !/^\d{4}-\d{2}$/.test(String(monthValue))) {
      return null;
    }

    const [year, month] = String(monthValue).split('-').map(Number);
    const lastDay = new Date(year, month, 0).getDate();

    return {
      start: `${year}-${String(month).padStart(2, '0')}-01`,
      end: `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
    };
  }

  function createDashboardCardModule(deps) {
    const state = {
      chart: null,
      currentRange: null,
      initialized: false
    };

    function getElements() {
      return {
        canvas: document.getElementById('failureTrendChart'),
        periodLabel: document.getElementById('failureTrendPeriodLabel'),
        viewMode: document.getElementById('failureTrendViewMode'),
        monthInput: document.getElementById('failureTrendMonth'),
        monthWrapper: document.getElementById('failureTrendMonthWrapper'),
        startInput: document.getElementById('failureTrendStartDate'),
        startWrapper: document.getElementById('failureTrendStartWrapper'),
        endInput: document.getElementById('failureTrendEndDate'),
        endWrapper: document.getElementById('failureTrendEndWrapper'),
        applyButton: document.getElementById('applyFailureTrendFilter'),
        clearButton: document.getElementById('clearFailureTrendFilter')
      };
    }

    function getDefaultMonth() {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }

    function getCurrentRangeFromControls() {
      const elements = getElements();

      if (elements.viewMode?.value === 'range') {
        const start = elements.startInput?.value || '';
        const end = elements.endInput?.value || '';
        return start && end ? { start, end } : null;
      }

      return formatMonthRange(elements.monthInput?.value || getDefaultMonth());
    }

    function setControlsFromState() {
      const elements = getElements();
      const defaultMonth = getDefaultMonth();

      if (elements.monthInput && !elements.monthInput.value) {
        elements.monthInput.value = defaultMonth;
      }

      if (!state.currentRange) {
        state.currentRange = formatMonthRange(elements.monthInput?.value || defaultMonth);
      }

      const isRange = elements.viewMode?.value === 'range';

      if (elements.monthWrapper) {
        elements.monthWrapper.classList.toggle('hidden', isRange);
      }

      if (elements.startWrapper) {
        elements.startWrapper.classList.toggle('hidden', !isRange);
      }

      if (elements.endWrapper) {
        elements.endWrapper.classList.toggle('hidden', !isRange);
      }
    }

    function formatRangeLabel(range) {
      if (!range?.start || !range?.end) {
        return 'Exibindo o mes atual agrupado por dia da semana.';
      }

      return `Exibindo falhas agrupadas por dia da semana entre ${deps.formatDateBR(range.start)} e ${deps.formatDateBR(range.end)}.`;
    }

    function buildDataset(range) {
      const labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
      const values = [0, 0, 0, 0, 0, 0, 0];
      const startDate = parseLocalDate(range?.start);
      const endDate = parseLocalDate(range?.end);

      if (!startDate || !endDate) {
        return { labels, values };
      }

      const checklists = deps.getAllChecklists();

      checklists.forEach((item) => {
        const checklistDate = deps.getChecklistDate(item);
        if (!checklistDate) {
          return;
        }

        const localDate = new Date(
          checklistDate.getFullYear(),
          checklistDate.getMonth(),
          checklistDate.getDate()
        );
        localDate.setHours(0, 0, 0, 0);

        if (localDate < startDate || localDate > endDate) {
          return;
        }

        const totalFalhas = Array.isArray(item.ocorrencias) ? item.ocorrencias.length : 0;
        if (!totalFalhas) {
          return;
        }

        const jsDay = localDate.getDay();
        const mappedIndex = jsDay === 0 ? 6 : jsDay - 1;
        values[mappedIndex] += totalFalhas;
      });

      return { labels, values };
    }

    function destroy() {
      if (state.chart && typeof state.chart.destroy === 'function') {
        state.chart.destroy();
      }
      state.chart = null;
    }

    function render() {
      const elements = getElements();
      const canvas = elements.canvas;

      if (!canvas || typeof window.Chart === 'undefined') {
        return null;
      }

      setControlsFromState();
      const range = state.currentRange || getCurrentRangeFromControls();
      const data = buildDataset(range);

      destroy();

      if (elements.periodLabel) {
        elements.periodLabel.textContent = formatRangeLabel(range);
      }

      state.chart = new window.Chart(canvas, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Falhas no Periodo',
            data: data.values,
            borderColor: '#ef4444',
            backgroundColor: ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#14b8a6'],
            borderWidth: 1.5,
            borderRadius: 10,
            borderSkipped: false,
            barPercentage: 0.72,
            categoryPercentage: 0.72
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: deps.getDynamicChartMax(data.values, 10),
              ticks: {
                color: '#64748b',
                font: deps.getChartTickFont(),
                maxTicksLimit: deps.isMobileChartViewport() ? 5 : 7
              },
              grid: { color: deps.getChartGridColor() }
            },
            x: {
              ticks: {
                color: '#64748b',
                font: deps.getChartTickFont(),
                maxRotation: 0,
                autoSkip: false
              },
              grid: { display: false }
            }
          }
        }
      });

      if (typeof deps.setChartInstance === 'function') {
        deps.setChartInstance('failureTrend', state.chart);
      }

      return state.chart;
    }

    function applyFilters() {
      const elements = getElements();

      if (elements.viewMode?.value === 'range') {
        const start = elements.startInput?.value || '';
        const end = elements.endInput?.value || '';

        if (!start || !end) {
          alert('Por favor, preencha a data inicial e a data final.');
          return;
        }

        if (start > end) {
          alert('A data inicial deve ser anterior ou igual a data final.');
          return;
        }

        state.currentRange = { start, end };
      } else {
        const monthRange = formatMonthRange(elements.monthInput?.value || '');

        if (!monthRange) {
          alert('Por favor, selecione um mes valido.');
          return;
        }

        state.currentRange = monthRange;
      }

      if (typeof deps.onRequestRender === 'function') {
        deps.onRequestRender();
        return;
      }

      render();
    }

    function resetFilters() {
      const elements = getElements();
      const defaultMonth = getDefaultMonth();

      if (elements.viewMode) {
        elements.viewMode.value = 'month';
      }

      if (elements.monthInput) {
        elements.monthInput.value = defaultMonth;
      }

      if (elements.startInput) {
        elements.startInput.value = '';
      }

      if (elements.endInput) {
        elements.endInput.value = '';
      }

      state.currentRange = formatMonthRange(defaultMonth);
      setControlsFromState();

      if (typeof deps.onRequestRender === 'function') {
        deps.onRequestRender();
        return;
      }

      render();
    }

    function init() {
      if (state.initialized) {
        return;
      }

      const elements = getElements();
      state.currentRange = formatMonthRange(elements.monthInput?.value || getDefaultMonth());
      setControlsFromState();

      if (elements.viewMode) {
        elements.viewMode.addEventListener('change', setControlsFromState);
      }

      if (elements.applyButton) {
        elements.applyButton.addEventListener('click', applyFilters);
      }

      if (elements.clearButton) {
        elements.clearButton.addEventListener('click', resetFilters);
      }

      state.initialized = true;
    }

    return {
      init,
      render,
      destroy
    };
  }

  window.createDashboardCardModule = createDashboardCardModule;
})();
