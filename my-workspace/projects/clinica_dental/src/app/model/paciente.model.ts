export interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;  // ISO string, ejemplo: "1990-12-31"
  telefono: string;
  email: string;
  activo?: boolean;  // opcional para controlar si el paciente está activo o no
}
