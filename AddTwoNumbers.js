function NodoLista(valor, siguiente = null) {
    this.valor = valor;
    this.siguiente = siguiente;
}

function sumarDosNumeros(l1, l2) {
    let nodoCabeza = new NodoLista(0); // Nodo inicial para facilitar la creación de la lista resultante
    let actual = nodoCabeza; // Puntero que usaremos para agregar nuevos nodos en la lista resultante
    let acarreo = 0; // Acarreo que se usará cuando la suma de dos dígitos sea 10 o más

    // Bucle que continúa mientras haya nodos en l1 o l2, o un acarreo que agregar
    while (l1 !== null || l2 !== null || acarreo > 0) {
        // Obtener el valor del nodo actual de l1 y l2 o 0 si ya no hay nodos
        let valor1 = l1 ? l1.valor : 0;
        let valor2 = l2 ? l2.valor : 0;

        // Calcular la suma del valor actual de ambos nodos y el acarreo
        let suma = valor1 + valor2 + acarreo;

        // Actualizar el acarreo para la siguiente iteración (división entera)
        acarreo = Math.floor(suma / 10);

        // Crear un nuevo nodo con el valor de suma % 10 (dígito de las unidades)
        actual.siguiente = new NodoLista(suma % 10);

        // Mover el puntero actual al siguiente nodo
        actual = actual.siguiente;
        
        // Avanzar en las listas l1 y l2 si no hemos llegado al final
        if (l1) l1 = l1.siguiente;
        if (l2) l2 = l2.siguiente;
    }

    // Retornar el siguiente de nodoCabeza ya que el primer nodo es un nodo auxiliar
    return nodoCabeza.siguiente;
}
