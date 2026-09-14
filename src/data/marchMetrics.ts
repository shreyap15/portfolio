// Snapshot of the repository's holdout rows, retrieved at the commit below.
// These are separate saved runs; do not infer one shared evaluation period.
export const marchSourceCommit = '906075cbbf73199a4e29e78500e97e746498aa4a'
export const marchMetrics = {
  women: {
    label: 'Women',
    source: `https://github.com/shreyap15/march-madness/blob/${marchSourceCommit}/data/processed/women/model_metrics.csv`,
    rows: [
      { model: 'Logistic regression', value: 0.40332365456939767 },
      { model: 'Random forest', value: 0.41497966364989664 },
      { model: 'Ensemble', value: 0.4115257862236732 },
    ],
  },
  men: {
    label: 'Men',
    source: `https://github.com/shreyap15/march-madness/blob/${marchSourceCommit}/data/processed/men/model_metrics_men.csv`,
    rows: [
      { model: 'Logistic regression', value: 0.7116941890444402 },
      { model: 'Random forest', value: 0.7885242343126997 },
      { model: 'Ensemble', value: 0.6223927690058203 },
    ],
  },
}
