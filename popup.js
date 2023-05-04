function replaceTurkishChars(str) {
  const turkishToEnglish = {
    'ç': 'c',
    'ğ': 'g',
    'ı': 'i',
    'ö': 'o',
    'ş': 's',
    'ü': 'u',
    'Ç': 'C',
    'Ğ': 'G',
    'İ': 'I',
    'Ö': 'O',
    'Ş': 'S',
    'Ü': 'U'
  };

  return str.replace(/[çğıöşüÇĞİÖŞÜ]/g, (match) => turkishToEnglish[match]);
}

document.getElementById('ara').addEventListener('click', () => {
  let suserAra = document.getElementById('suser-ara').value;
  const baslikAra = document.getElementById('baslik-ara').value;
  let url;

  if (suserAra) {
    suserAra = replaceTurkishChars(suserAra);
    url = `https://eksisozluk2023.com/biri/${suserAra}`;
  } else if (baslikAra) {
    url = `https://eksisozluk2023.com/${baslikAra}`;
  }

  if (url) {
    chrome.tabs.update({ url: url });
  }
});

document.getElementById('yeni-sekme').addEventListener('click', () => {
  let suserAra = document.getElementById('suser-ara').value;
  const baslikAra = document.getElementById('baslik-ara').value;
  let url;

  if (suserAra) {
    suserAra = replaceTurkishChars(suserAra);
    url = `https://eksisozluk2023.com/biri/${suserAra}`;
  } else if (baslikAra) {
    url = `https://eksisozluk2023.com/${baslikAra}`;
  }

  if (url) {
    chrome.tabs.create({ url: url });
  }
});