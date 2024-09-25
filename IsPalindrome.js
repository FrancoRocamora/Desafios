function isPalindrome(x) {
    // Los números negativos y los números que terminan en 0 (excepto 0) no son palíndromos
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    
    // Revertimos la segunda mitad del número
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Comparamos la primera mitad con la segunda mitad revertida
    // Si el número tiene longitud impar, ignoramos el dígito del medio (por eso el /10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
