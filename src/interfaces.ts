export interface ParticleInterface {
  x: number
  y: number
  direction: number
  are: number
  aim: number
  bre: number
  bim: number
}

export interface ProbabilityInterface {
  x: number
  y: number
  probability: number
}

export interface MeasureInterface {
  photonId: number
  x: number
  y: number
  dirStr: string
  polStr: string
  inputProb: number
  probability: number
  projectedState: string
}
