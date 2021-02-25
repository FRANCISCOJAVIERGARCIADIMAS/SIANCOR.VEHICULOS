export interface Unidad {
  noEconomico: string;
  marca: string;
  modelo: string;
  tipo: string;
  noSerie: string;
  placas: string;
  documentos: Documentos;
  disponibilidad: boolean;
}

export interface Documentos {
  placasdeCirculacion: boolean;
  tarjetadeCirculacion: boolean;
  polizadeSeguro: boolean;
  verificacionVehicular: VerificacionVehicular;
  tenencia: boolean;
  engomado: boolean;
}

export interface VerificacionVehicular {
  primerSemestre: boolean;
  anio: boolean;
}