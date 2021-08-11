async function conversor() {
  url = 'https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-JPY,USD-BRL,USD-EUR,USD-JPY,EUR-BRL,EUR-USD,EUR-JPY,JPY-BRL,JPY-USD,JPY-EUR'

  const dados = await fetch(url)
  const valores = await dados.json()

  const realDolar = parseFloat(valores.BRLUSD.high)
  const realEuro = parseFloat(valores.BRLEUR.high)
  const realIene = parseFloat(valores.BRLJPY.high)
  const dolarReal = parseFloat(valores.USDBRL.high)
  const dolarEuro = parseFloat(valores.USDEUR.high)
  const dolarIene = parseFloat(valores.USDJPY.high)
  const euroReal = parseFloat(valores.EURBRL.high)
  const euroDolar = parseFloat(valores.EURUSD.high)
  const euroIene = parseFloat(valores.EURJPY.high)
  const ieneReal = parseFloat(valores.JPYBRL.high)
  const ieneDolar = parseFloat(valores.JPYUSD.high)
  const ieneEuro = parseFloat(valores.JPYEUR.high)

  setInterval(function () {
    const inicial = document.querySelector('#converter-de').value
    const final = document.querySelector('#para-qual-valor').value
    let valorUsuario = document.querySelector('#converter').value
    const simbolo = document.querySelector('#simbolo-moeda')
    const valorConvertido = document.querySelector('#valor-convertido')

    if (valorUsuario <= 0) {
      valorUsuario = 0
    }

    if (inicial == 'real' && final == 'real') {
      simbolo.innerText = 'R$'
      valorConvertido.innerText = parseFloat(valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'dolar-americano' && final == 'dolar-americano') {
      simbolo.innerText = '$'
      valorConvertido.innerText = parseFloat(valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'euro' && final == 'euro') {
      simbolo.innerText = '€'
      valorConvertido.innerText = parseFloat(valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'iene' && final == 'iene') {
      simbolo.innerText = '¥'
      valorConvertido.innerText = parseFloat(valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'real' && final == 'dolar-americano') {
      simbolo.innerText = '$'
      valorConvertido.innerText = (realDolar * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'dolar-americano' && final == 'real') {
      simbolo.innerText = 'R$'
      valorConvertido.innerText = (dolarReal * valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'real' && final == 'euro') {
      simbolo.innerText = '€'
      valorConvertido.innerText = (realEuro * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'euro' && final == 'real') {
      simbolo.innerText = 'R$'
      valorConvertido.innerText = (euroReal * valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'real' && final == 'iene') {
      simbolo.innerText = '¥'
      valorConvertido.innerText = (realIene * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'iene' && final == 'real') {
      simbolo.innerText = 'R$'
      valorConvertido.innerText = (ieneReal * valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'dolar-americano' && final == 'euro') {
      simbolo.innerText = '€'
      valorConvertido.innerText = (dolarEuro * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'euro' && final == 'dolar-americano') {
      simbolo.innerText = '$'
      valorConvertido.innerText = (euroDolar * valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'dolar-americano' && final == 'iene') {
      simbolo.innerText = '¥'
      valorConvertido.innerText = (dolarIene * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'iene' && final == 'dolar-americano') {
      simbolo.innerText = '$'
      valorConvertido.innerText = (ieneDolar * valorUsuario).toFixed(2).replace('.', ',')
    }

    if (inicial == 'euro' && final == 'iene') {
      simbolo.innerText = '¥'
      valorConvertido.innerText = parseFloat(euroIene * valorUsuario).toFixed(2).replace('.', ',')
    } else if (inicial == 'iene' && final == 'euro') {
      simbolo.innerText = '€'
      valorConvertido.innerText = parseFloat(ieneEuro * valorUsuario).toFixed(2).replace('.', ',')
    }
  }, 1)
}

conversor()