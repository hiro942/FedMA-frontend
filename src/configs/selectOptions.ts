// 开关选项
import { modelNamesMap } from '@/configs/maps'

export const switchOptions = [
  { value: 0, label: '否' },
  { value: 1, label: '是' },
]

// 训练状态筛选选项
export const stateFilterOptions = [
  { value: 'ASSIGNED', label: '待开始' },
  { value: 'TRAINED', label: '进行中' },
  { value: 'FINISHED', label: '已完成' },
]

// 模型选项
export const modelOptions = [
  {
    type: 'group',
    label: '自定义模型',
    key: 'custom model',
    children: [
      { value: modelNamesMap.secureBoost, label: 'SecureBoost' },
      { value: modelNamesMap.neuralNetwork, label: '神经网络' },
      {
        value: modelNamesMap.logisticRegression,
        label: '逻辑回归',
      },
    ],
  },
  {
    type: 'group',
    label: '预定义模型',
    key: 'fixed model',
    children: [{ value: modelNamesMap.lstm, label: 'LSTM' }],
  },
]

// 损失函数选项
export const lossOptions = [
  { value: 'binary_crossentropy', label: 'Binary Cross Entropy' },
  { value: 'categorical_crossentropy', label: 'Categorical Cross Entropy' },
  { value: 'categorical_hinge', label: 'Categorical Hinge' },
  { value: 'cosine_similarity', label: 'Cosine Similarity' },
  { value: 'hinge', label: 'Hinge' },
  { value: 'logcosh', label: 'Log Cosh' },
  { value: 'mean_absolute_error', label: 'Mean Absolute Error' },
  {
    value: 'mean_absolute_percentage_error',
    label: 'Mean Absolute Percentage Error',
  },
  { value: 'mean_squared_error', label: 'Mean Squared Error' },
  {
    value: 'mean_squared_logarithmic_error',
    label: 'Mean Squared Logarithmic Error',
  },
  { value: 'poisson', label: 'Poisson' },
]

// 优化算法选项
export const optimizerOptions = {
  nn: [
    { value: 'Adadelta', label: 'Adadelta' },
    { value: 'Adagrad', label: 'Adagrad' },
    { value: 'Adam', label: 'Adam' },
    { value: 'Adamax', label: 'Adamax' },
    { value: 'Nadam', label: 'Nadam' },
    { value: 'Ftrl', label: 'Ftrl' },
    { value: 'RMSProp', label: 'RMSProp' },
    { value: 'SGD', label: 'SGD' },
  ],
  lr: [
    { value: 'SGD', label: 'SGD' },
    { value: 'RMSProp', label: 'RMSProp' },
    { value: 'Adam', label: 'Adam' },
    { value: 'Adagrad', label: 'Adagrad' },
    { value: 'Nesterov Momentum', label: 'Nesterov Momentum' },
  ],
}

// 正则选项
export const penaltyOptions = {
  lr: [
    { value: 'L1', label: 'L1' },
    { value: 'L2', label: 'L2' },
  ],
}

// 早停策略选项
export const earlyStopOptions = {
  lr: [
    { value: 'diff', label: '损失值变化趋于零' },
    { value: 'abs', label: '损失值绝对值变化趋于零' },
    { value: 'weight_diff', label: '模型权重变化趋于零' },
  ],
  nn: [
    { value: 'diff', label: '损失值变化趋于零' },
    { value: 'abs', label: '损失值绝对值变化趋于零' },
    { value: 'weight_diff', label: '模型权重变化趋于零' },
  ],
}

// 差值算法选项
export const interpolationOptions = [
  { value: 'INTER_LINEAR', label: '双线性插值' },
  { value: 'INTER_NEAREST', label: '最近邻插值' },
  { value: 'INTER_AREA', label: '像素区域关系重采样' },
  { value: 'INTER_CUBIC', label: '4*4像素领域的双三次插值' },
  { value: 'INTER_LANCZOS4', label: '8*8像素领域的Lanczos插值' },
]

// 特征归一化选项
export const featureScaleMethodOptions = [
  { label: 'Min-Max 归一化', value: 'min_max_scale' },
  { label: '标准归一化', value: 'standard_scale' },
]

// 特征分箱选项
export const featureBinningMethodOptions = [
  // { label: 'Virtual Summary', value: 'virtual_summary' },
  { label: 'Recursive Query', value: 'recursive_query' },
]
