class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre= nombre,
        this.apellido= apellido,
        this.libros= libros,
        this.mascotas= mascotas
    }

        getFullName() {
        console.log(`mi nombres es ${this.nombre} y mi apellido es ${this.apellido}`);   }
        
        addMascotas(nueva) {
            (this.mascotas).push(nueva)
        console.log(`${this.mascotas}` );   }

        countMascotas(){
            console.log(this.mascotas.length);
        }
        
        
        addLibros(autores, titulos) {
            (this.libros).push({autor: autores, titulo: titulos})
            console.log(this.libros.length);
   }

        getBooksnames() {
            for (let i = 0; i < this.libros.length; i++) {
                console.log(this.libros[i].autor);
            }
   }
}

const m = new Usuario("mauricio", "durcak", [{titulo : "suertudo", autor: "Cortazar"}, {titulo : "El tunel", autor: "Sabato"}], ["gato", "perro"])

m.getFullName()
m.addMascotas("mono")
m.countMascotas()
m.addLibros("Bioi", "la nube")
m.getBooksnames()