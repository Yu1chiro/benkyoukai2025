const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Data untuk soal latihan JLPT
const soalJLPT = [
  {
    id: 1,
    level: 'N5',
    title: 'Soal JLPT N5 ',
    description: 'Daftar Soal JLPT N5 Lengkap',
    category: 'soal',
    year: '2011-2021',
    difficulty: 'Mudah',
    questions: 100,
    downloadUrl: 'https://justpaste.it/ls/jfdks/zhv0vaepyt9h61ct'
  },
  {
    id: 2,
    level: 'N4',
    title: 'Soal JLPT N4',
    description: 'Daftar Soal JLPT N4 Lengkap',
    category: 'soal',
    year: '2011-2021',
    difficulty: 'Sedang',
    questions: 100,
    downloadUrl: 'https://justpaste.it/ls/ikwku/szexutw0wk3g3s1g'
  },
  {
    id: 3,
    level: 'N3',
    title: 'Soal JLPT N3',
    description: 'Daftar Soal JLPT N3 Lengkap',
    category: 'soal',
    year: '2011-2025',
    difficulty: 'Sulit',
    questions: 100,
    downloadUrl: 'https://justpaste.it/ls/jspra/ps5ar2aap8epdi3e'
  },
  {
    id: 4,
    level: 'N2',
    title: 'Soal JLPT N2',
    description: 'Daftar Soal JLPT N2 Lengkap',
    category: 'soal',
    year: '2011-2025',
    difficulty: 'Sangat Sulit',
    questions: 100,
    downloadUrl: 'https://drive.google.com/drive/folders/1Di3Q_kDmtjj-YGPiPNWEjVkOGVAO37_X'
  },
  {
    id: 5,
    level: 'N1',
    title: 'Soal JLPT N1',
    description: 'Daftar Soal JLPT N1 Lengkap',
    category: 'soal',
    year: '2011-2025',
    difficulty: 'Expert',
    questions: 100,
    downloadUrl: 'https://drive.google.com/drive/folders/16KK2Tw4fM9BPrI1XbpniCPtj0wcZ6cb0'
  }


  
];

// Data untuk grup WhatsApp
const dataYouTube = [
  {
    id: 1,
    title: 'Penjelasan Materi JLPT N3',
    thumbnail: 'https://i.ytimg.com/vi/6moh43PP7aM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDAwKP_X7SttZcpqFwnxWq2YBh1NQ',
    link: 'https://www.youtube.com/@nassusensei',
    category: 'youtube',
    level: 'N3',
    channel: 'Muzukashii Nihongo'
  },
  {
    id: 2,
    title: 'Japanese Podcast with Hana',
    thumbnail: 'https://i.ytimg.com/vi/L0A3z5uY-_s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBUkPfMaX0Nnz_OxKGatVrEaIjPXw',
    link: 'https://www.youtube.com/@japanesepodcasthana',
    category: 'youtube',
    level: 'N4',
    channel: 'Japanese Podcast With Hana'
  },
  {
    id: 3,
    title: '【JLPT直前対策！】1時間でJLPT N2文法 ',
    thumbnail: 'https://i.ytimg.com/vi/dUk38cYzGYo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA6fHKy-3FkCudp7LM7_PaUHQJ-rA',
    link: 'https://www.youtube.com/@nihongonomori2013',
    category: 'youtube',
    level: 'N2',
    channel: 'Nihongo no Mori'
  },
  {
    id: 4,
    title: '【都道府県Podcast】#4  静岡/しずおか Japan Prefecture Guide, listening practice',
    thumbnail: 'https://i.ytimg.com/vi/tkgtz3qEkBU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCWKUERwQPdmbkztAOUJBPLhieXCw',
    link: 'https://www.youtube.com/@yuyunihongopodcast',
    category: 'youtube',
    level: 'N2',
    channel: 'Yuyu Sensei Podcast'
  },
  {
    id: 5,
    title: 'Japanese coversation, how to buy cake in japan',
    thumbnail: 'https://i.ytimg.com/vi/PTX58pli-kI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDnk1vnMNNfO2huCpQJ8GBvmDsLRw',
    link: 'https://www.youtube.com/@Akane-JapaneseClass',
    category: 'youtube',
    level: 'N5',
    channel: 'Akaneteki Nihongo'
  },
 
];


// Data untuk file materi
const fileMateri = [
  {
    id: 1,
    title: 'Basic Kanji Book',
    description: 'Daftar Lengkap Kanji N5 & N4',
    category: 'materi',
    level: 'N4',
    type: 'PDF',
    pages: 200,
    downloadUrl: 'https://drive.google.com/drive/folders/1EKf2RyfLU88LS1anhfr1WTW1Yt2hazyn'
  },
  {
    id: 2,
    title: 'Kanji Look and Learn N5',
    description: 'Daftar Lengkap Kanji N5',
    category: 'materi',
    level: 'N5',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://drive.google.com/file/d/1mMO5XPaQ8DDa6YOVSd_yVgANbvSB7jwh/view'
  },
  {
    id: 3,
    title: 'Kirari Nihongo N5 PDF',
    description: 'Daftar Lengkap Kanji N5',
    category: 'materi',
    level: 'N5',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://drive.google.com/file/d/1Pk9DyevC8G51OgUuO6RwWLhaR_lmifGZ/view'
  },
  {
    id: 4 ,
    title: 'Shin Nihongo 500 mon JLPT N4 N5 ',
    description: 'Daftar Lengkap Kanji N5',
    category: 'materi',
    level: 'N4',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://drive.google.com/file/d/16gcVFpWX8CgEieBjitV0vLATlJK3hPLS/view'
  },
  {
    id: 5,
    title: 'Shinkanzen Master N4',
    description: 'Ada 3 File Materi',
    category: 'materi',
    level: 'N4',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://drive.google.com/drive/folders/1snktVwmWjl8Mkvb-_YElNLlpWNov6fji'
  },
  {
    id: 6,
    title: 'Irodori Book A1-A2',
    description: 'Irodori Bahasa Indonesia Lengkap',
    category: 'materi',
    level: 'N4',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://sites.google.com/view/jf-irodori/halaman-pemelajar'
  },
  {
    id: 7,
    title: 'Paket Belajar N3 ',
    description: 'lengkap 3 file materi',
    category: 'materi',
    level: 'N3',
    type: 'PDF',
    pages: 100,
    downloadUrl: 'https://drive.google.com/drive/folders/1CCpmY_IARfGHfKs54XjIYwDk-ZJFOE7g?usp=sharing'
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        soalJLPT: soalJLPT,
        dataYouTube: dataYouTube, // Ganti dari grupWhatsApp
        fileMateri: fileMateri
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message
    });
  }
});

// Update switch case di endpoint kategori
app.get('/api/data/:category', (req, res) => {
  try {
    const { category } = req.params;
    let data;
    
    switch (category) {
      case 'soal':
        data = soalJLPT;
        break;
      case 'youtube': // Ganti dari 'grup'
        data = dataYouTube; // Ganti dari grupWhatsApp
        break;
      case 'materi':
        data = fileMateri;
        break;
      default:
        return res.status(400).json({
          success: false,
          message: 'Kategori tidak valid'
        });
    }
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message
    });
  }
});

// Update switch case di endpoint filter level
app.get('/api/data/:category/:level', (req, res) => {
  try {
    const { category, level } = req.params;
    let data;
    
    switch (category) {
      case 'soal':
        data = soalJLPT.filter(item => item.level.toLowerCase() === level.toLowerCase());
        break;
      case 'youtube': // Ganti dari 'grup'
        data = dataYouTube.filter(item => // Ganti dari grupWhatsApp
          item.level.toLowerCase() === level.toLowerCase() || item.level === 'All'
        );
        break;
      case 'materi':
        data = fileMateri.filter(item => 
          item.level.toLowerCase() === level.toLowerCase() || item.level === 'All'
        );
        break;
      default:
        return res.status(400).json({
          success: false,
          message: 'Kategori tidak valid'
        });
    }
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`📚 Benkyoukai JLPT Website siap digunakan!`);
});