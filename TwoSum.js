function twoSum(nums, target) {
    const map = new Map();  // Creamos un mapa para almacenar los valores y sus índices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Buscamos el complemento para sumar el objetivo
        
        if (map.has(complement)) {  // Si el complemento ya está en el mapa
            return [map.get(complement), i];  // Devolvemos el índice del complemento y el índice actual
        }
        
        map.set(nums[i], i);  // Agregamos el número actual al mapa con su índice
    }
    
    return [];  // Si no se encuentra una solución (aunque el problema asegura que siempre habrá una)
}
