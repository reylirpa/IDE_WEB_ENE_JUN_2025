# MACCA'S IDE

## IDE Web para Análisis Léxico, Sintáctico y Máquina de Turing

---

**Estudiante:** Reyli Pérez Acosta  
**Profesor:** Molina Gomez Kevin David  
**Semestre:** 6to Semestre

---

## 🏢 Introducción

**MACCA'S IDE** es una plataforma web interactiva diseñada para facilitar el análisis de código fuente en el contexto académico de Lenguajes y Autómatas. El sistema integra análisis léxico, sintáctico y una máquina de Turing, presentando los resultados de forma visual, clara y profesional. Su interfaz moderna y responsiva está pensada para mejorar la experiencia de aprendizaje y la comprensión de los conceptos fundamentales de la teoría de lenguajes formales.

---

## 🚀 Características Principales
- **Análisis Léxico:** Identificación de tokens, palabras clave, símbolos y errores léxicos.
- **Análisis Sintáctico:** Validación de la estructura del código y reporte detallado de errores.
- **Simulación de Máquina de Turing:** Clasificación de cadenas como generadas por humano o robot.
- **Interfaz Moderna:** Tema oscuro, diseño responsivo, resultados gráficos y visuales.

---

## 🛠️ Tecnologías Utilizadas
| Componente | Tecnología |
|------------|------------|
| Backend    | Python 3, Flask |
| Frontend   | HTML5, CSS3, JavaScript |
| Estilos    | CSS personalizado, Google Fonts |

---

## 📦 Estructura del Proyecto
```
MACCA'SIDE/
├── app.py           # Servidor Flask y rutas
├── lexer.py         # Analizador léxico
├── parser.py        # Analizador sintáctico
├── turing.py        # Máquina de Turing
│
├── templates/
│   └── index.html   # Interfaz principal
│
└── static/
    ├── css/
    ├── js/
    └── img/
```

---

## 💻 Instalación y Ejecución
### Requisitos
- Python 3.7 o superior
- Flask

### Pasos para Ejecutar
1. Clona este repositorio o descarga los archivos.
2. Instala las dependencias:
   ```bash
   pip install flask
   ```
3. Ejecuta el servidor:
   ```bash
   python app.py
   ```
4. Accede a la aplicación en tu navegador: [http://localhost:5000](http://localhost:5000)

---

## 🧩 Especificaciones del Lenguaje
- **Palabras clave permitidas:** `if`, `else`, `while`, `for`, `return`
- **Símbolos válidos:** `(`, `)`, `{`, `}`, `+`, `-`, `*`, `/`, `=`
- **Símbolos prohibidos:** `;`, `:`
- **Números:** Secuencias de dígitos
- **Identificadores:** Nombres válidos de variable

### Reglas Sintácticas
- No se permiten estructuras de control (`if`, `while`, `for`, etc.)
- Cada línea debe ser una asignación válida con un solo `=`
- El nombre de la variable debe ser válido
- No se permiten líneas vacías (excepto saltos de línea)

---

## 📝 Ejemplos de Código
| Ejemplo         | Código                              | Resultado esperado                  |
|-----------------|-------------------------------------|-------------------------------------|
| Válido          | `mplValor = 10`                     | Asignación correcta                 |
| Válido          | `mplResultadoFinal = 42`            | Asignación correcta                 |
| Válido          | `mplTempVar = mplValor`             | Asignación correcta                 |
| Inválido        | `if mplValor = 5`                   | Error: estructura de control        |
| Inválido        | `mplNum = 10;`                      | Error: uso de punto y coma          |
| Inválido        | `mplResultado: = 20`                | Error: uso de dos puntos            |
| Inválido        | `= 30`                              | Error: falta nombre de variable     |
| Inválido        | `mplValor = = 40`                   | Error: múltiples signos igual        |

---

## 🤖 Máquina de Turing
- Solo acepta cadenas con los caracteres `a` y `b`.
- Si la cadena termina en `a` → **HUMANO** 🧍
- Si termina en `b` → **ROBOT** 🤖
- Cualquier otro carácter → **ERROR** ❓

---

## 🎨 Interfaz de Usuario
- Tema oscuro profesional y elegante
- Header decorativo y subtítulo descriptivo
- Botones con iconos y colores distintivos
- Resultados visuales: tablas, badges, bloques informativos
- Diseño responsivo para cualquier dispositivo

---

## 📊 Flujo de Análisis
1. El código pasa por el análisis léxico
2. Si es válido, pasa al análisis sintáctico
3. La máquina de Turing puede ejecutarse de forma independiente

---

## 📬 Contacto
Si tienes dudas, sugerencias o deseas contribuir, puedes contactar al autor:
- **Correo:** reyli.perez@ejemplo.com
- **LinkedIn:** [linkedin.com/in/reyli-perez](https://linkedin.com/in/reyli-perez)

---

## 🤝 Créditos y Licencia
Proyecto académico desarrollado para la materia de Lenguajes y Autómatas.  
**Uso educativo únicamente.**

## 🙏 Agradecimientos

Quiero expresar mi agradecimiento especial a:

- **Sir. Paul McCartney**
- **John Lennon**
- **The Beatles**
- **Elvis Presley**
- **José José**

por la inspiración y compañía musical durante el desarrollo de este proyecto. Su música fue un motor creativo y un refugio en cada etapa del proceso.

---

**Créditos:**
Proyecto desarrollado por Reyli Pérez Acosta para la materia de Lenguajes y Autómatas.

Asistencia técnica, redacción y mejoras proporcionadas por ChatGPT (OpenAI).
