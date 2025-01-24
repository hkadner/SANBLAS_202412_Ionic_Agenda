export interface Tarea {
    nombre? : string,
    descripcion? : string,
    fechaLimite? : string,
    criticidad? : Criticidad,
    estado?: "Pendiente" | "En proceso" | "Finalizada"
}

export enum Criticidad {
    BAJA = "Baja",
    MEDIA = "Media",
    ALTA = "Alta"
}