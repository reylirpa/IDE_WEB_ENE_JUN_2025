const editor = document.getElementById("editor");
const lineNumbers = document.getElementById("lineNumbers");
const resultado = document.getElementById("resultado");

function updateLineNumbers() {
  const lines = editor.innerText.split('\n');
  lineNumbers.innerHTML = '';
  lines.forEach((_, i) => {
    const div = document.createElement('div');
    div.textContent = i + 1;
    lineNumbers.appendChild(div);
  });
}

function ajustarAlturaEditor() {
  editor.style.height = 'auto';
  editor.style.height = editor.scrollHeight + 'px';
}

function handleEditorInput() {
  updateLineNumbers();
  ajustarAlturaEditor();
}

function getCode() {
  return editor.innerText;
}

function resetWarnings() {
  Array.from(lineNumbers.children).forEach(div => div.classList.remove("line-warning"));
  const lines = editor.innerText.split('\n');
  editor.innerHTML = lines.map(line => {
    const safeLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<div>${safeLine}</div>`;
  }).join('');
  ajustarAlturaEditor();
}

function marcarErrores(errores) {
  const lines = editor.innerText.split('\n');

  editor.innerHTML = lines.map((line, idx) => {
    const safeLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const error = errores.find(e => e.linea === idx + 1);
    if (error) {
      if (error.fin_codigo !== undefined) {
        const parteCodigo = safeLine.substring(0, error.fin_codigo);
        const parteComentario = safeLine.substring(error.fin_codigo);
        return `<div><span class="subrayado-error" data-error="${error.mensaje}">${parteCodigo}</span>${parteComentario}</div>`;
      }
      return `<div><span class="subrayado-error" data-error="${error.mensaje}">${safeLine}</span></div>`;
    }
    return `<div>${safeLine}</div>`;
  }).join('');

  errores.forEach(error => {
    const div = lineNumbers.children[error.linea - 1];
    if (div) div.classList.add("line-warning");
  });

  ajustarAlturaEditor();
}

function renderLexicoTable(resultado) {
  const lines = resultado.split('\n');
  let rows = '';
  lines.forEach(line => {
    let tipo = '', valor = '', badgeClass = '';
    if (line.startsWith('Palabra clave:')) {
      tipo = 'Palabra clave'; valor = line.replace('Palabra clave: ', ''); badgeClass = 'mplBadgeKey';
    } else if (line.startsWith('Identificador:')) {
      tipo = 'Identificador'; valor = line.replace('Identificador: ', ''); badgeClass = 'mplBadgeIdent';
    } else if (line.startsWith('Símbolo:')) {
      tipo = 'Símbolo'; valor = line.replace('Símbolo: ', ''); badgeClass = 'mplBadgeSym';
    } else if (line.startsWith('Número:')) {
      tipo = 'Número'; valor = line.replace('Número: ', ''); badgeClass = 'mplBadgeNum';
    } else if (line.startsWith('Error:')) {
      tipo = 'Error'; valor = line.replace('Error: ', ''); badgeClass = 'mplBadgeError';
    }
    if (tipo && valor) {
      rows += `<tr><td class='${badgeClass}'>${tipo}</td><td>${valor}</td></tr>`;
    }
  });
  if (!rows) return resultado;
  return `<div style='margin-bottom:0.7em;font-weight:bold;'>🔤 Análisis Léxico</div><table class='mplLexTable'><thead><tr><th>Tipo</th><th>Valor</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderSintacticoVisual(data) {
  let html = '';
  if (data.resultado && data.resultado.includes('correcto')) {
    html += `<div class='mplSintaxBlock mplSintaxSuccess'>
      <div class='mplSintaxIcon'>✅</div>
      <div class='mplSintaxMsg'>Análisis sintáctico correcto</div>
      <div class='mplSintaxMsg mplSintaxMsgSec'>¡No se encontraron errores!</div>
    </div>`;
  } else {
    html += `<div class='mplSintaxBlock mplSintaxError'>
      <div class='mplSintaxIcon'>❌</div>
      <div class='mplSintaxMsg'>Análisis sintáctico con errores</div>
    </div>`;
  }
  if (data.errores && data.errores.length > 0) {
    html += `<ul class='mplSintaxErrList'>`;
    data.errores.forEach(err => {
      html += `<li>⚠️ <b>Línea ${err.linea}:</b> ${err.mensaje}</li>`;
    });
    html += `</ul>`;
  }
  return html;
}

function analizarSintactico() {
  const code = getCode();
  resultado.innerText = "Salida:\n🔍 Resultado del análisis ...";
  fetch("/analizar-sintactico", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  })
  .then(res => res.json())
  .then(data => {
    resultado.innerHTML = renderSintacticoVisual(data);
    resetWarnings();
    if (data.errores && data.errores.length > 0) {
      marcarErrores(data.errores);
    }
  });
}

function analizarLexico() {
  const code = getCode();
  resultado.innerText = "Salida:\n🔍 Resultado del análisis ...";
  fetch("/analizar-lexico", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  })
  .then(res => res.json())
  .then(data => {
    resultado.innerHTML = renderLexicoTable(data.resultado);
  });
}

function ejecutarTuring() {
  const code = getCode();
  resultado.innerText = "Salida:\n🔍 Resultado del análisis ...";
  fetch("/turing", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  })
  .then(res => res.json())
  .then(data => {
    resultado.innerText = "Salida:\n⚙️ Resultado de la Máquina de Turing:\n" + data.resultado;
  });
}

function limpiarEditor() {
  editor.innerText = "";
  updateLineNumbers();
  resultado.innerText = "Salida:\n💬 Editor limpio.";
}

editor.addEventListener("input", handleEditorInput);
updateLineNumbers();
ajustarAlturaEditor();