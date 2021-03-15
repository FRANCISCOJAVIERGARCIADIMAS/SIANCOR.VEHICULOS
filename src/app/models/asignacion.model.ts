export class AsignacionModel {
    idConductor: string;
    noEconomico: string;
    documentos: Documentos;
    nivelCombustible: string;
    accesorios: Accesorios;
    herramientas: Herramientas;
    firmas: Firmas;
    constructor(){
        this.idConductor=" ";
        this.noEconomico=" ";
    }
  }
  
  export class Firmas {
    jefedeGrupo: string;
    taller: string;
    jefedeVentas: string;
    vendedor: string;
  }
  
  export class Herramientas {
    refracciondeLlanta: boolean;
    maneralDadoLlanta: boolean;
    desarmadorPlanoCruz: boolean;
    diablo: boolean;
    juegodeCables: boolean;
    gatoHidraulico: boolean;
    reflejantes: boolean;
  }
  
  export class Accesorios {
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
    vidrios: boolean;
    vidriosPuertaIzquierda: boolean;
    aletasDerecha: boolean;
    aletasIzquierda: boolean;
    rejadeTermo: boolean;
    claxon: boolean;
  }
  
  export class Documentos {
    placasdeCirculacion: boolean;
    tarjetadeCirculacion: boolean;
    polizadeSeguro: boolean;
    verificacionVehicular: string;
    tenencia: boolean;
    engomado: boolean;
    comentario: string;
  }
  