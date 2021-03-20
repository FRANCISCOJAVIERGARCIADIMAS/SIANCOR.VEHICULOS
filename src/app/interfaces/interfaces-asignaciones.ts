export interface Asignaciones {
  folioAsignacion: string;
  fecha: string;
  conductor: Conductor;
  unidadTransporte: UnidadTransporte;
  nivelCombustible: string;
  accesorios: Accesorios;
  herramientas: Herramientas;
  carroceria: string;
  firmas: Firmas;
}

export interface Firmas {
  jefedeGrupo: string;
  taller: string;
  jefedeVentas: string;
  vendedor: string;
}

export interface Herramientas {
  refracciondeLlanta: boolean;
  maneralDadoLlanta: boolean;
  desarmadorPlanoCruz: boolean;
  diablo: boolean;
  juegodeCables: boolean;
  gatoHidraulico: boolean;
  reflejantes: boolean;
}

export interface Accesorios {
  espejoInterior: boolean;
  espejoLateralIzquierdo: boolean;
  espejoLateralDerecho: boolean;
  tapondeGasolina: boolean;
  tapondeRadiador: boolean;
  tapondeAceite: boolean;
  limpiadores: boolean;
  depositodeAgua: boolean;
  perillaPalancaVelocidad: boolean;
  viseras: boolean;
  manijasdeElevadores: boolean;
  tapasdePuerta: boolean;
  cenicero: boolean;
  guantera: boolean;
  tapetes: boolean;
  bayoneta: boolean;
  faros: boolean;
  cinturondeSeguridad: boolean;
  botonSeguridadPuerta: boolean;
  tapondeLicuadora: boolean;
  depositodeLimpiadores: boolean;
  manijadePuertaDerecha: boolean;
  manijadePuertaIzquierda: boolean;
  cuartosDelanteros: boolean;
  cuartosTraseros: boolean;
  reversa: boolean;
  stop: boolean;
  lucesdeNavegacion: boolean;
  plafondeCajaInterior: boolean;
  toldo: boolean;
  parrilla: boolean;
  lucesdeCajayCabina: boolean;
  cielodeCabina: boolean;
  cortinas: boolean;
  vidriosPuertaDerecha: boolean;
  vidriosPuertaIzquierda: boolean;
  aletasDerecha: boolean;
  aletasIzquierda: boolean;
  rejadeTermo: boolean;
  claxon: boolean;
}

export interface UnidadTransporte {
  noEconomico: string;
  marca: string;
  modelo: string;
  tipo: string;
  noSerie: string;
  placas: string;
  documentos: Documentos;
}

export interface Documentos {
  placasdeCirculacion: boolean;
  tarjetadeCirculacion: boolean;
  polizadeSeguro: boolean;
  verificacionVehicular: string;
  tenencia: boolean;
  engomado: boolean;
  comentario: string;
}

export interface Conductor {
  idConductor: string;
  nombre: string;
  departamento: string;
  noLicencia: string;
  tipo: string;
  fechadeVencimiento: string;
  estado: string;
 
}