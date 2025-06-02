# MACCA'S IDE

<div align="center">
<table>
  <tr>
    <td style="vertical-align: top; text-align: center; padding-right: 24px;">
      <img src="https://github.com/user-attachments/assets/e12deaf3-fae5-44f9-97a3-edc5dddd8ffa" alt="Imagen de WhatsApp 2025-06-01 a las 20 58 47_28069440" width="180"/><br/>
      <strong>Reyli Pérez Acosta</strong>
    </td>
    <td style="vertical-align: top;">
      <strong>📚 Datos Académicos</strong><br/>
      <ul>
        <li><strong>Estudiante:</strong> Reyli Pérez Acosta</li>
        <li><strong>Profesor:</strong> Molina Gomez Kevin David</li>
        <li><strong>Materia:</strong> Lenguajes y Autómatas</li>
        <li><strong>Semestre:</strong> 6to Semestre</li>
      </ul>
    </td>
  </tr>
</table>
</div>

---

---
## IDE Web para Análisis Léxico, Sintáctico y Máquina de Turing

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

## 💻 Instrucciones para Ejecutar el Proyecto
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

## 🧩 Explicación del Lenguaje Personalizado

### Tokens Reconocidos
| Tipo            | Ejemplo(s)           | Descripción                                 |
|-----------------|---------------------|---------------------------------------------|
| Palabra clave   | if, else, while     | Estructuras reservadas (no permitidas)      |
| Símbolo válido  | (, ), {, }, +, -, *, /, = | Operadores y delimitadores permitidos |
| Símbolo prohibido | ;, :              | No permitidos, generan error léxico         |
| Número          | 10, 42              | Secuencias de dígitos                       |
| Identificador   | mplValor, resultado | Nombres válidos de variable                 |

### Gramática y Reglas Sintácticas
- No se permiten estructuras de control (`if`, `while`, `for`, etc.).
- Cada línea debe ser una asignación válida con un solo `=`.
- El nombre de la variable debe ser válido (identificador).
- No se permiten líneas vacías (excepto saltos de línea).

### Errores Comunes Detectados
- Uso de palabras clave reservadas.
- Uso de símbolos prohibidos (`;`, `:`).
- Asignaciones con más de un `=` o sin nombre de variable.
- Valor de asignación faltante.
- Línea sin operador de asignación `=`.

---

## 📝 Ejemplos de Entrada Válida e Inválida

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
