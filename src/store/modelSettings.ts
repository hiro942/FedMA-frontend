import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
import { FormInst } from 'naive-ui'

const useModelSettingsStore = defineStore('modelSettings', () => {
  const commonSettings: FLearningModels.TaskAssign.CommonSettings = {
    taskName: '',
    modelName: 'homo_nn',
    timeLimit: 0,
    minPeers: 1,
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
    }

  const secureBoostSettings: FLearningModels.TaskAssign.SecureBoostSettings = {
    taskType: '',
    evalType: '',
    numTrees: 5,
    maxDepth: 3,
  }

  const neuralNetworkSettings: FLearningModels.TaskAssign.NeuralNetworkSettings =
    {
      maxIter: 100,
      batchSize: -1,

      // 算法配置
      loss: '',
      optimizer: 'SGD',
      learningRate: 0.001,
      earlyStop: 'diff',

      aggregateEveryNEpoch: 1,
      encodeLabel: 0,

      layers: [
        {
          class_name: 'Dense',
          name: 'dense_0',
          units: 1,
          activation: 'sigmoid',
          use_bias: true,
          kernel_initializer: 'GlorotUniform',
          bias_initializer: 'Zeros',
        },
        {
          class_name: 'Dense',
          name: 'dense_1',
          units: 1,
          activation: 'sigmoid',
          use_bias: true,
          kernel_initializer: 'GlorotUniform',
          bias_initializer: 'Zeros',
        },
      ],
    }

  const logisticRegressionSettings: FLearningModels.TaskAssign.LogisticRegressionSettings =
    {
      maxIter: 100,
      batchSize: -1,
      optimizer: 'RMSProp',
      learningRate: 0.001,
      penalty: 'L2',
      earlyStop: 'diff',
      alpha: 1.0,
      decay: 1,
      aggregateIters: 1,
      useProximal: 0,
      mu: 0.1,
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
    logisticRegressionSettings,
    featureEngineeringChecked,
    featureEngineeringSettings,
  }
})

export default useModelSettingsStore