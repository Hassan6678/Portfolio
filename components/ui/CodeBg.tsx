'use client'

// Decorative background code animation — purely visual, opacity ~0.04
// Scrolls upward infinitely to give an IDE feel to the hero section

const CODE_LINES = [
  'import pandas as pd',
  'import numpy as np',
  'from sklearn.cluster import KMeans',
  'from sklearn.preprocessing import StandardScaler',
  'import geopandas as gpd',
  'from shapely.geometry import Point',
  'import tensorflow as tf',
  'from transformers import AutoTokenizer, AutoModel',
  '',
  'def weighted_kmeans(coords, weights, k=167):',
  '    scaler = StandardScaler()',
  '    X = scaler.fit_transform(coords)',
  '    km = KMeans(n_clusters=k, init="k-means++",',
  '                max_iter=500, random_state=42)',
  '    km.fit(X, sample_weight=weights)',
  '    return km.labels_, km.cluster_centers_',
  '',
  'def assign_territories(outlets_df, n_territories=167):',
  '    coords = outlets_df[["lat", "lng"]].values',
  '    weights = outlets_df["visit_freq"].values',
  '    labels, centers = weighted_kmeans(coords, weights,',
  '                                      k=n_territories)',
  '    outlets_df["territory_id"] = labels',
  '    return outlets_df, centers',
  '',
  'class SalesForecastModel(tf.keras.Model):',
  '    def __init__(self, units=128):',
  '        super().__init__()',
  '        self.lstm = tf.keras.layers.LSTM(units,',
  '            return_sequences=True)',
  '        self.attention = tf.keras.layers.Attention()',
  '        self.dense = tf.keras.layers.Dense(1)',
  '',
  '    def call(self, inputs, training=False):',
  '        x = self.lstm(inputs)',
  '        x = self.attention([x, x])',
  '        return self.dense(x)',
  '',
  '# Satellite imagery pipeline',
  'def extract_features(image_path):',
  '    img = cv2.imread(image_path)',
  '    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)',
  '    features = hog(gray, orientations=8,',
  '                   pixels_per_cell=(16, 16),',
  '                   cells_per_block=(1, 1))',
  '    return features',
  '',
  'def build_nlp_pipeline(model_name="bert-base"):',
  '    tokenizer = AutoTokenizer.from_pretrained(model_name)',
  '    model = AutoModel.from_pretrained(model_name)',
  '    return tokenizer, model',
  '',
  '# Route optimization — 4-week cycle',
  'DAILY_CALL_MIN = 8',
  'DAILY_CALL_MAX = 14',
  'CYCLE_WEEKS = 4',
  '',
  'def optimize_routes(territory, depot):',
  '    outlets = territory.sort_values("visit_freq",',
  '                                     ascending=False)',
  '    schedule = []',
  '    for week in range(CYCLE_WEEKS):',
  '        daily = outlets.sample(frac=1/CYCLE_WEEKS)',
  '        schedule.append(daily)',
  '    return schedule',
  '',
  'import apache_beam as beam',
  'from apache_beam.options.pipeline_options import (',
  '    PipelineOptions)',
  '',
  'def run_etl_pipeline(input_path, output_path):',
  '    opts = PipelineOptions()',
  '    with beam.Pipeline(options=opts) as p:',
  '        (p | "Read" >> beam.io.ReadFromText(input_path)',
  '           | "Parse" >> beam.Map(parse_record)',
  '           | "Filter" >> beam.Filter(is_valid)',
  '           | "Write" >> beam.io.WriteToText(output_path))',
]

export default function CodeBg() {
  // Double the lines so the seamless loop works
  const lines = [...CODE_LINES, ...CODE_LINES]

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="scroll-code font-mono text-xs leading-6 whitespace-pre text-green-400 opacity-[0.038] px-8 pt-8">
        {lines.map((line, i) => (
          <div key={i}>{line || '\u00A0'}</div>
        ))}
      </div>
    </div>
  )
}
