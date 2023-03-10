declare namespace ServerStatusModels {
  //
  type HardwareStatus = {
    cpuStatus: {
      physicalCores: number
      logicalCores: number
      percentage: number
    }
    memoryStatus: {
      total: string
      used: string
      free: string
      percentage: number
    }
  }
}
