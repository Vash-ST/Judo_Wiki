import os

# Archivos o carpetas que NO queremos subir (para no marear a la IA)
IGNORAR = ['node_modules', '.git', 'public', 'dist', '.env', 'unir.py', 'package-lock.json']
EXT_VALIDAS = ['.tsx', '.ts', '.js', '.json', '.css', '.html']

with open('proyecto_completo.txt', 'w', encoding='utf-8') as f_out:
    for raiz, dirs, archivos in os.walk('.'):
        # Filtrar carpetas ignoradas
        dirs[:] = [d for d in dirs if d not in IGNORAR]
        
        for nombre in archivos:
            if any(nombre.endswith(ext) for ext in EXT_VALIDAS):
                ruta_completa = os.path.join(raiz, nombre)
                f_out.write(f"\n--- ARCHIVO: {ruta_completa} ---\n")
                try:
                    with open(ruta_completa, 'r', encoding='utf-8') as f_in:
                        f_out.write(f_in.read())
                except:
                    f_out.write("[Error leyendo este archivo]\n")

print("¡Listo! Tu código está en proyecto_completo.txt")