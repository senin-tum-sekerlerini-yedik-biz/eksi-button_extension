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

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'searchEksiSuser',
    title: 'suser ara',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'searchEksiSuser') {
	const selectedText = replaceTurkishChars(info.selectionText);
    const searchUrl = `https://eksisozluk2023.com/biri/${selectedText}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
