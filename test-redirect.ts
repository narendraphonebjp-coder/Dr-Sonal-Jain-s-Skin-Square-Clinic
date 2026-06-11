import fetch from 'node-fetch';

async function main() {
  try {
    const url = 'https://maps.app.goo.gl/btuFoMPtnutwMn838';
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    console.log('Final URL:', res.url);
  } catch (err) {
    console.error('Error resolving redirect:', err);
  }
}

main();
