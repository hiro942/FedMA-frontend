import { defineStore } from 'pinia'

const useModelSettingsStore = defineStore('modelSettingsStore', () => {
  const commonSettings: FLearningModels.TaskAssign.CommonSettings = {
    taskName: '',
    modelName: 'homo_nn',
    timeLimit: 0,
    description: '',
  }

  const dataset: FLearningModels.TaskAssign.Dataset = {
    trainFile: undefined,
    evaluateFile: undefined,
  }

  const csvDatasetSettings: FLearningModels.TaskAssign.CSVDatasetSettings = {
    labelName: '',
    featureNames: [],
  }

  const imageDatasetSettings: FLearningModels.TaskAssign.ImageDatasetSettings =
    {
      processSize: {
        width: 28,
        height: 28,
      },
      interpolation: 'INTER_LINEAR',
      readFlag: 'IMREAD_COLOR',
    }

  const secureBoostSettings: FLearningModels.TaskAssign.SecureBoostSettings = {
    evalType: '',
    numTrees: 5,
    maxDepth: 3,
  }

  const logisticRegressionSettings: FLearningModels.TaskAssign.LogisticRegressionSettings =
    {
      evalType: '',
      maxIter: 100,
      batchSize: -1,
      optimizer: 'SGD',
      learningRate: 0.15,
      penalty: 'L2',
      earlyStop: 'diff',
      alpha: 1.0,
      decay: 1.0,
      aggregateIters: 1,
      useProximal: 0,
      mu: 0.1,
    }

  const neuralNetworkSettings: FLearningModels.TaskAssign.NeuralNetworkSettings =
    {
      evalType: '',
      maxIter: 100,
      batchSize: -1,

      // 算法配置
      loss: '',
      optimizer: 'Adam',
      learningRate: 0.015,
      earlyStop: 'diff',

      aggregateEveryNEpoch: 1,
      encodeLabel: 0,

      layers: [
        // {
        //   class_name: 'Dense',
        //   name: 'dense_0',
        //   units: 16,
        //   activation: 'sigmoid',
        //   use_bias: 1,
        //   kernel_initializer: 'GlorotUniform',
        //   bias_initializer: 'Zeros',
        // },
        // {
        //   class_name: 'Dense',
        //   name: 'dense_1',
        //   units: 16,
        //   activation: 'sigmoid',
        //   use_bias: 1,
        //   kernel_initializer: 'GlorotUniform',
        //   bias_initializer: 'Zeros',
        // },
      ],
    }

  const lstmSettings = {
    maxIter: 50,
    batchSize: -1,
    evalType: 'multi',
    encodeLabel: 1,
    loss: 'categorical_crossentropy',
    learningRate: 0.1,
    layers: [
      {
        class_name: 'Embedding',
        name: 'embedding',
        input_dim: 205408,
        output_dim: 1,
        input_length: 31,
      },
      {
        class_name: 'LSTM',
        name: 'lstm',
        units: 20,
      },
      {
        class_name: 'Dropout',
        name: 'dropout',
        rate: 0.1,
      },
      {
        class_name: 'Dense',
        name: 'dense',
        units: 16,
        activation: 'softmax',
        use_bias: 1,
        kernel_regularizer: null,
        bias_regularizer: null,
        activity_regularizer: null,
        kernel_constraint: null,
        bias_constraint: null,
      },
    ],
  }

  const featureEngineeringChecked: any = {
    HomoFeatureBinning: false,
    FeatureScale: false,
  }

  const featureEngineeringSettings: FLearningModels.TaskAssign.FeatureEngineeringSettings =
    {
      HomoFeatureBinning: {
        method: 'recursive_query',
        sampleBins: 10,
        binNames: [],
      },
      FeatureScale: {
        method: 'min_max_scale',
      },
    }

  return {
    commonSettings,
    dataset,
    csvDatasetSettings,
    imageDatasetSettings,
    secureBoostSettings,
    neuralNetworkSettings,
    lstmSettings,
    logisticRegressionSettings,
    featureEngineeringChecked,
    featureEngineeringSettings,
  }
})

export default useModelSettingsStore
