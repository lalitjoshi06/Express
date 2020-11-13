/*
{
  "name": "Kosmos Scraper V1.1",
  "id": "JD'z Provider Pack(JS)",
  "version": 1,
  "permaUrl": "https://raw.githubusercontent.com/JonathanAkaJD/Express/main/Providers.js"
}
*/
{
  "Scraper-1": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/category-search/{query}/Anime/1/"
    },
    "base_url": "https://www.1337x.to",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/sort-category-search/{query}/TV/size/desc/1/"
    },
    "fallback_urls": [
      "https://1337x.st",
      "https://1337x.is",
      "https://1337x.gd",
      "https://x1337x.ws",
      "https://1337x.am",
      "https://x1337x.eu",
      "https://x1337x.se",
      "https://1337x.unblocked.llc",
      "https://1337x.unblocker.cc",
      "https://1337x.unblockall.org"
    ],
    "html_parser": {
      "peers": "row.querySelector('.leeches').innerHTML",
      "row": "doc.querySelectorAll('tbody > tr')",
      "seeds": "row.querySelector('.seeds').innerHTML",
      "size": "row.querySelector('tbody > tr .size').textContent.split('B')[0] + 'B'",
      "title": "row.querySelector('a:nth-child(2)').innerHTML",
      "url": "'https://www.1337x.to'+ row.querySelector('a:nth-child(2)').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/category-search/{query}/Movies/1/"
    },
    "name": "Scraper-1",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/sort-category-search/{query}/TV/size/desc/1/"
    },
    "separator": "+",
    "source_is_in_sub_page": true,
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "Scraper-2": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": ""
    },
    "base_url": "https://bitlordsearch.com/search?q={query}",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": ""
    },
    "html_parser": {
      "peers": "row.querySelector('.peers').textContent",
      "row": "doc.querySelectorAll('#container table tbody tr.bls-row')",
      "seeds": "row.querySelector('.seeds').textContent",
      "size": "(row.querySelector('.size').textContent < 120 ? row.querySelector('.size').textContent * 1024 : (row.querySelector('.size').textContent > 122880 ? row.querySelector('.size').textContent / 1204  : row.querySelector('.size').textContent))+' MB'",
      "title": "row.querySelector('.title').textContent",
      "url": "row.querySelector('.magnet-button').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "method": "POST",
    "movie": {
      "keywords": "{title} {year}",
      "query": ""
    },
    "name": "Scraper-2",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": ""
    },
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-3": {
    "name": "Scraper-3",
    "enabled": true,
    "languages": [
      "en"
    ],
    "base_url": "https://btdb.eu",
    "fallback_urls": [],
    "response_type": "text",
    "separator": "%20",
    "movie": {
      "query": "/search/{query}/0/?sort=popular",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/search/{query}/0/?sort=popular",
      "keywords": "{title} {episodeCode}"
    },
    "season": {
      "query": "/search/{query}/0/?sort=popular",
      "keywords": [
        "{title} {season4ode}",
        "{title} season"
      ]
    },
    "anime": {
      "query": "/search/{query}/0/?sort=popular",
      "keywords": "{title} {absoluteNumber}"
    },
    "html_parser": {
      "row": "doc.querySelectorAll('.card-body .media')",
      "title": "row.querySelector('.media-body .item-title').textContent",
      "peers": "row.querySelector('.item-meta-info small:nth-child(4) strong').textContent",
      "seeds": "row.querySelector('.item-meta-info small:nth-child(3) strong').textContent",
      "size": "row.querySelector('.item-meta-info small:nth-child(1) strong').textContent",
      "url": "row.querySelector('.media-right a:nth-child(1)').getAttribute('href')"
    },
    "source_is_in_sub_page": false,
    "title_replacement": {
      ".": "",
      ":": "",
      "'": "",
      "&": ""
    }
  },
  "Scraper-4": {
    "base_url": "https://eztv.io",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/search/{query}"
    },
    "fallback_urls": [
      "https://eztv.re",
      "https://eztv.ag",
      "https://eztv.it",
      "https://eztv.ch",
      "https://eztv.unblocked.llc",
      "https://eztv.unblocker.cc"
    ],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(6)').textContent",
      "row": "doc.querySelectorAll('tr.forum_header_border')",
      "seeds": "row.querySelector('td:nth-child(6)').textContent",
      "size": "row.querySelector('td:nth-child(4)').textContent",
      "title": "row.querySelector('td:nth-child(2)').textContent",
      "url": "row.querySelector('td:nth-child(3) a').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "name": "Scraper-4",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/search/{query}"
    },
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "glodls": {
    "base_url": "https://glodls.to",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/search_results.php?search={query}&cat=41&incldead=0&inclexternal=0&lang=1&sort=seeders&order=desc"
    },
    "fallback_urls": [],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(7)').textContent",
      "row": "doc.querySelectorAll('table.ttable_headinner tbody tr.t-row:nth-child(odd)')",
      "seeds": "row.querySelector('td:nth-child(6)').textContent",
      "size": "row.querySelector('td:nth-child(5)').textContent",
      "title": "row.querySelector('td:nth-child(2) a:nth-child(2)').textContent",
      "url": "row.querySelector('td:nth-child(4) a').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/search_results.php?search={query}&cat=1&incldead=0&inclexternal=0&lang=1&sort=size&order=desc"
    },
    "name": "glodls",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/search_results.php?search={query}&cat=41&incldead=0&inclexternal=0&lang=1&sort=seeders&order=desc"
    },
    "separator": "+",
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-5": {
    "name": "Scraper-5",
    "enabled": true,
    "languages": [
      "it"
    ],
    "base_url": "https://ilcorsaronero.link",
    "fallback_urls": [],
    "response_type": "text",
    "movie": {
      "query": "/argh.php?search={query}",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/argh.php?search={query}",
      "keywords": [
        "{title.it} {episodeCode}",
        "{title.original} {episodeCode}"
      ]
    },
    "season": {
      "query": "/argh.php?search={query}",
      "keywords": [
        "{title.it} {seasonCode}",
        "{title.original} {seasonCode}"
      ]
    },
    "html_parser": {
      "row": "doc.querySelectorAll('tr.odd, tr.odd2')",
      "title": "row.querySelector('td:nth-child(2)').textContent",
      "peers": "row.querySelector('td:nth-child(7 )').textContent",
      "seeds": "row.querySelector('td:nth-child(6)').textContent",
      "size": "row.querySelector('td:nth-child(3)').textContent",
      "url": "'magnet:?xt=urn:btih:'+ row.querySelector('input').value"
    },
    "title_replacement": {
      "'s": "s",
      "\"": ""
    }
  },
  "Scraper-6": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/usearch/{query}"
    },
    "base_url": "https://kickass.vc",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/usearch/{query}%20category:tv/"
    },
    "fallback_urls": [
      "https://kat.how",
      "https://kat.li",
      "https://kickass.cm",
      "https://kickass2.st",
      "https://kat.sx",
      "https://thekat.info",
      "https://kickass.unblocked.llc"
    ],
    "html_parser": {
      "peers": "row.querySelectorAll('td')[4].textContent",
      "row": "doc.querySelectorAll('table:nth-child(2) tbody tr:not(.firstr)')",
      "seeds": "row.querySelectorAll('td')[3].textContent",
      "size": "row.querySelector('.nobr').textContent",
      "title": "row.querySelector('.cellMainLink').textContent",
      "url": "decodeURIComponent(row.querySelectorAll('a')[1].getAttribute('href').match(/magnet(.*)/)[0])"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/usearch/{query}%20category:movies/"
    },
    "name": "Scraper-6",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/usearch/{query}%20category:tv/"
    },
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-7": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/search/anime/{query}"
    },
    "base_url": "https://www.limetorrents.info",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/search/tv/{query}"
    },
    "fallback_urls": [
      "https://www.limetorrents.asia",
      "https://www.limetorrents.zone"
    ],
    "html_parser": {
      "peers": "row.querySelector('.tdseed').textContent.replace(',','')",
      "row": "doc.querySelectorAll('.table2 tbody tr:nth-child(n+2)')",
      "seeds": "row.querySelector('.tdleech').textContent.replace(',','')",
      "size": "row.querySelector('.tdnormal:nth-child(3)').textContent",
      "title": "row.querySelector('.tt-name').textContent",
      "url": "'https://www.limetorrents.info/'+row.querySelector('.tt-name a:nth-child(2)').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/search/movies/{query}"
    },
    "name": "Scraper-7",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/search/tv/{query}"
    },
    "separator": "-",
    "source_is_in_sub_page": true,
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-8": {
    "base_url": "https://www.magnetdl.com",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/{titleFirstLetter}/{query}/"
    },
    "fallback_urls": [],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(8)') ? row.querySelector('td:nth-child(8)').textContent : ''",
      "row": "doc.querySelectorAll('table.download tbody tr:nth-child(odd)')",
      "seeds": "row.querySelector('td:nth-child(7)') ? row.querySelector('td:nth-child(7)').textContent : ''",
      "size": "row.querySelector('td:nth-child(6)') ? row.querySelector('td:nth-child(6)').textContent.replace(',','') : ''",
      "title": "row.querySelector('td:nth-child(2) a') ? row.querySelector('td:nth-child(2) a').getAttribute('title') : ''",
      "url": "row.querySelector('td:nth-child(1) a') ? row.querySelector('td:nth-child(1) a').getAttribute('href') : ''"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/{titleFirstLetter}/{query}/"
    },
    "name": "Scraper-8",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/{titleFirstLetter}/{query}/"
    },
    "separator": "-",
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "Scraper-9": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/recherche/{query}"
    },
    "base_url": "https://www.oxtorrent.com",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/recherche/{query}"
    },
    "fallback_urls": [],
    "html_parser": {
      "peers": "row.querySelector(':nth-child(4)').textContent.trim()",
      "row": "doc.querySelectorAll('tbody > tr')",
      "seeds": "row.querySelector(':nth-child(3)').textContent.trim()",
      "size": "row.querySelector('td:nth-child(2)').textContent.trim()",
      "title": "row.querySelector('a:nth-child(2)').innerHTML",
      "url": "row.querySelector('a:nth-child(2)').getAttribute('href')"
    },
    "languages": [
      "fr"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/recherche/{query}"
    },
    "name": "Scraper-9",
    "response_type": "text",
    "season": {
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ],
      "query": "/recherche/{query}"
    },
    "separator": "%20",
    "source_is_in_sub_page": true,
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "Scraper-10": {
    "name": "Scraper-10",
    "enabled": true,
    "languages": [
      "en"
    ],
    "base_url": "http://pirateiro.com",
    "fallback_urls": [
      "https://pirateiro.unblocked.nz"
    ],
    "response_type": "text",
    "movie": {
      "query": "/torrents/?c300=1&search={query}&orderby=tamanho",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/torrents/?search={query}&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
      "keywords": "{title} {episodeCode}"
    },
    "season": {
      "query": "/torrents/?search={query}&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ]
    },
    "anime": {
      "query": "/torrents/?search={query}&c100=1&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
      "keywords": "{title} {absoluteNumber}"
    },
    "html_parser": {
      "row": "doc.querySelectorAll('tr.impar')",
      "title": "row.querySelector('a > b').textContent",
      "peers": "row.querySelector('td:nth-child(6) > b > font').textContent.replace(' ', '')",
      "seeds": "row.querySelector('b > font').textContent.replace(' ', '')",
      "size": "row.querySelector('td > font').textContent",
      "url": "row.querySelector('a.imagnet.icon16').getAttribute('href')"
    },
    "source_is_in_sub_page": false
  },
  "Scraper-11": {
    "name": "Scraper-11",
    "enabled": true,
    "languages": [
      "ru"
    ],
    "base_url": "http://rutor.info",
    "response_type": "text",
    "movie": {
      "query": "/search/{query}",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/search/{query}",
      "keywords": "{title} {season}"
    },
    "html_parser": {
      "row": "doc.querySelectorAll('tr.gai, tr.tum')",
      "title": "row.querySelector('td:nth-child(2)').innerText",
      "peers": "row.querySelector('td:nth-child(5) span.green').innerText",
      "seeds": "row.querySelector('td:nth-child(5) span.red').innerText",
      "size": "row.querySelector('td:nth-child(4)').innerText",
      "url": "row.querySelector('td:nth-child(2) a:nth-child(1)').getAttribute('href')"
    }
  },
  "Scraper-12": {
    "name": "Scraper-12",
    "enabled": true,
    "languages": [
      "en"
    ],
    "base_url": "https://www.skytorrents.to",
    "fallback_urls": [],
    "response_type": "text",
    "separator": "%20",
    "movie": {
      "query": "/?search={query}&sort=seeders",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/?search={query}&sort=seeders",
      "keywords": "{title} {episodeCode}"
    },
    "season": {
      "query": "/?search={query}&sort=seeders",
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ]
    },
    "html_parser": {
      "row": "doc.querySelectorAll('tbody .result')",
      "title": "row.querySelector('td:nth-child(1) a').textContent",
      "peers": "row.querySelector('td:nth-child(6)').textContent",
      "seeds": "row.querySelector('td:nth-child(5)').textContent",
      "size": "row.querySelector('td:nth-child(2)').textContent",
      "url": "row.querySelectorAll('td:nth-child(1) a')[2].getAttribute('href')"
    },
    "title_replacement": {
      ".": "",
      ":": "",
      "'": "",
      "&": ""
    }
  },
  "Scraper-13": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": ""
    },
    "base_url": "https://solidtorrents.net/api/v1/search?q={query}&category=video&sort=seeders",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": ""
    },
    "json_format": {
      "peers": "swarm.leechers",
      "results": "results",
      "seeds": "swarm.seeders",
      "size": "size",
      "title": "title",
      "url": "magnet"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": ""
    },
    "name": "Scraper-13",
    "response_type": "json",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": ""
    },
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-14": {
    "base_url": "https://pirateproxy.live",
    "enabled": true,
    "episode": {
      "keywords": [
        "{title} {episodeCode}",
        "{title} {season}"
      ],
      "query": "/s/?q={query}&page=0&&video=on&orderby=99"
    },
    "fallback_urls": [
      "https://thepiratebay.org",
      "https://thepiratebay.fun",
      "https://thepiratebay.asia",
      "https://tpb.party",
      "https://thepiratebay3.org",
      "https://thepiratebayz.org",
      "https://thehiddenbay.com",
      "https://piratebay.live",
      "https://thepiratebay.zone"
    ],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(4)') ? row.querySelector('td:nth-child(4)').textContent : ''",
      "row": "doc.querySelectorAll('tbody tr')",
      "seeds": "row.querySelector('td:nth-child(3)') ? row.querySelector('td:nth-child(3)').textContent : ''",
      "size": "row.querySelector('font') ? row.querySelector('font').textContent.split(',')[1].replace(/size/i,'') : ''",
      "title": "row.querySelector('div') ? row.querySelector('div').textContent : ''",
      "url": "row.querySelector('td:nth-child(2) a:nth-child(2)') ? row.querySelector('td:nth-child(2) a:nth-child(2)').getAttribute('href') : ''"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/s/?q={query}&page=0&&video=on&orderby=99"
    },
    "name": "Scraper-14",
    "response_type": "text",
    "season": {
      "keywords": [
        "{title} {seasonCode}"
      ],
      "query": "/s/?q={query}&page=0&&video=on&orderby=99"
    },
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "Scraper-15": {
    "base_url": "https://ww1.torrent9.to",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/search_torrent/{query}.html"
    },
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(4)').textContent",
      "row": "doc.querySelectorAll('.table-responsive tr')",
      "seeds": "row.querySelector('td:nth-child(3)').textContent",
      "size": "row.querySelector('td:nth-child(2)').textContent",
      "title": "row.querySelector('td:nth-child(1) a').textContent",
      "url": "'https://ww1.torrent9.to'+row.querySelector('td:nth-child(1) a').getAttribute('href')"
    },
    "languages": [
      "fr"
    ],
    "movie": {
      "keywords": [
        "{title.fr}",
        "{title}"
      ],
      "query": "/search_torrent/{query}.html"
    },
    "name": "Scraper-15",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/search_torrent/{query}.html"
    },
    "source_is_in_sub_page": true,
    "title_replacement": {
      "\"": "",
      "'s": "s"
    }
  },
  "Scraper-16": {
    "base_url": "https://torrentapi.org",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/pubapi_v2.php?mode=search&search_string={query}&category=tv&format=json_extended&app_id=invictus&token={token}"
    },
    "fallback_urls": [],
    "json_format": {
      "peers": "leechers",
      "results": "torrent_results",
      "seeds": "seeders",
      "size": "size",
      "title": "title",
      "url": "download"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{imdbId}",
      "query": "/pubapi_v2.php?mode=search&search_imdb={query}&category=movies&format=json_extended&app_id=invictus&token={token}"
    },
    "name": "Scraper-16",
    "response_type": "json",
    "season": {
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ],
      "query": "/pubapi_v2.php?mode=search&search_string={query}&category=tv&format=json_extended&app_id=invictus&token={token}"
    },
    "time_to_wait_between_each_request_ms": 300,
    "time_to_wait_on_too_many_request_ms": 2000,
    "title_replacement": {
      "\"": "",
      "'s": "s"
    },
    "token": {
      "query": "/pubapi_v2.php?get_token=get_token&app_id=invictus",
      "token_format": {
        "token": "token"
      },
      "token_validity_time_ms": 840000
    },
    "trust_results": true
  },
  "Scraper-17": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": ""
    },
    "base_url": "https://www.torrentdownload.ch/search?q={query}",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": ""
    },
    "html_parser": {
      "peers": "row.querySelector('.tdleech').textContent.replace(',','')",
      "row": "doc.querySelectorAll('table:nth-of-type(2) tbody tr:not(:first-child)')",
      "seeds": "row.querySelector('.tdseed').textContent.replace(',','')",
      "size": "row.querySelector('.tdnormal:nth-of-type(3)').textContent",
      "title": "row.querySelector('.tt-name a').textContent",
      "url": "'https://www.torrentdownload.ch'+row.querySelector('.tt-name a').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": ""
    },
    "name": "Scraper-17",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": ""
    },
    "separator": "+",
    "source_is_in_sub_page": true,
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-18": {
    "name": "Scraper-18",
    "enabled": true,
    "languages": [
      "en"
    ],
    "base_url": "https://www.torrentdownloads.me",
    "fallback_urls": [
      "https://www.torrentdownloads.info",
      "http://torrentdownloads.d4.re"
    ],
    "response_type": "text",
    "separator": "+",
    "source_is_in_sub_page": true,
    "movie": {
      "query": "/search/?search={query}",
      "keywords": "{title} {year}"
    },
    "episode": {
      "query": "/search/?search={query}",
      "keywords": "{title} {episodeCode}"
    },
    "season": {
      "query": "/search/?search={query}",
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ]
    },
    "anime": {
      "query": "/search/?search={query}",
      "keywords": "{title} {absoluteNumber}"
    },
    "html_parser": {
      "row": "doc.querySelectorAll('.inner_container')[1].querySelectorAll('.grey_bar3')",
      "title": "row.querySelector('p a').textContent",
      "peers": "row.querySelector('span:nth-child(3)').textContent",
      "seeds": "row.querySelector('span:nth-child(4)').textContent",
      "size": "row.querySelector('span:nth-child(5)').textContent",
      "url": "row.querySelector('p a').getAttribute('href').match('http') || row.querySelector('p a').getAttribute('href').match('php') ? null : row.querySelector('p a').getAttribute('href')"
    },
    "title_replacement": {
      ".": "",
      ":": "",
      "'": "",
      "&": ""
    }
  },
  "Scraper-19": {
    "name": "Scraper-19",
    "enabled": true,
    "languages": [
      "en"
    ],
    "base_url": "https://torrentgalaxy.org",
    "fallback_urls": [
      "https://torrentgalaxy.to",
      "https://torrentgalaxy.org",
      "https://torrentgalaxy.pw"
    ],
    "response_type": "text",
    "separator": "+",
    "movie": {
      "query": "/torrents.php?search={query}",
      "keywords": "{imdbId}"
    },
    "episode": {
      "query": "/torrents.php?c41=1&c5=1&c6=1&c7=1&search={query}&lang=0&nox=2",
      "keywords": "{title} {episodeCode}"
    },
    "season": {
      "query": "/torrents.php?c41=1&c5=1&c6=1&c7=1&search={query}&lang=0&nox=2",
      "keywords": [
        "{title} {seasonCode}",
        "{title} season"
      ]
    },
    "anime": {
      "query": "/torrents.php?c28=1&search={query}&lang=0&nox=2",
      "keywords": "{title} {absoluteNumber}"
    },
    "html_parser": {
      "row": "doc.querySelectorAll('.tgxtable .tgxtablerow')",
      "title": "row.querySelectorAll('a') ? row.querySelectorAll('a')[1].getAttribute('title') : ''",
      "peers": "row.querySelectorAll('span[title=\"Seeders/Leechers\"] b')[1].textContent",
      "seeds": "row.querySelectorAll('span[title=\"Seeders/Leechers\"] b')[0].textContent",
      "size": "row.querySelectorAll('.badge-secondary')[0].textContent",
      "url": "row.querySelectorAll('a') ? row.querySelectorAll('a')[4].getAttribute('href') : null"
    },
    "title_replacement": {
      ".": "",
      ":": "",
      "'": "",
      "&": ""
    }
  },
  "Scraper-20": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/?v=&c=&q={query}"
    },
    "base_url": "https://yourbittorrent.com",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/?v=&c=3&q={query}"
    },
    "fallback_urls": [
      "https://yourbittorrent2.com"
    ],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(6)').textContent",
      "row": "doc.querySelectorAll('tr.table-default')",
      "seeds": "row.querySelector('td:nth-child(7)').textContent",
      "size": "row.querySelector('td:nth-child(4)').textContent",
      "title": "row.querySelector('td:nth-child(2)').textContent",
      "url": "row.querySelector('td:nth-child(3) a:nth-child(3)').getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/?v=&c=1&q={query}"
    },
    "name": "Scraper-20",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/?v=&c=3&q={query}"
    },
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  },
  "Scraper-21": {
        "name": "Scraper-21",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://torrentapi.org",
        "fallback_urls": [],
        "response_type": "json",
        "time_to_wait_between_each_request_ms": 300,
        "time_to_wait_on_too_many_request_ms": 2000,
        "trust_results": true,
        "token": {
            "query": "/pubapi_v2.php?get_token=get_token&app_id=syncler",
            "token_validity_time_ms": 840000,
            "token_format": {
                "token": "token"
            }
        },
        "movie": {
            "query": "/pubapi_v2.php?mode=search&search_imdb={query}&category=movies&format=json_extended&app_id=syncler&token={token}",
            "keywords": "{imdbId}"
        },
        "episode": {
            "query": "/pubapi_v2.php?mode=search&search_string={query}&category=tv&format=json_extended&app_id=syncler&token={token}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/pubapi_v2.php?mode=search&search_string={query}&category=tv&format=json_extended&app_id=syncler&token={token}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "json_format": {
            "results": "torrent_results",
            "url": "download",
            "title": "title",
            "seeds": "seeders",
            "peers": "leechers",
            "size": "size"
        },
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-22": {
        "name": "Scraper-22",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://bitlordsearch.com",
        "response_type": "text",
        "movie": {
            "query": "/search?q={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search?q={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search?q={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('#container table tbody tr.bls-row')",
            "title": "row.querySelector('.title').textContent",
            "peers": "row.querySelector('.peers').textContent",
            "seeds": "row.querySelector('.seeds').textContent",
            "size": "(row.querySelector('.size').textContent < 120 ? row.querySelector('.size').textContent * 1024 : (row.querySelector('.size').textContent > 122880 ? row.querySelector('.size').textContent / 1204  : row.querySelector('.size').textContent))+' MB'",
            "url": "row.querySelector('.magnet-button').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-23": {
        "name": "Scraper-23",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://zooqle.com",
        "fallback_urls": [
            "https://zooqle.t0r.club",
            "https://zooqle-com.unblocksites.fun",
            "https://zooqle.unblocked.win",
            "https://zooqle.nocensor.xyz",
            "https://zooqle.unblocked.llc",
            "https://zooqle.unblocked.krd",
            "https://zooqle.p4y.info"
        ],
        "response_type": "text",
        "separator": "+",
        "movie": {
            "query": "/search?q={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search?q={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search?q={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.table-torrents tbody tr')",
            "title": "row.querySelector('td:nth-child(2) a').textContent",
            "peers": "row.querySelector('td:nth-child(6) .progress-bar:nth-child(2)') ? row.querySelector('td:nth-child(6) .prog-r').textContent : 0",
            "seeds": "row.querySelector('td:nth-child(6) .progress-bar:nth-child(1)') ? row.querySelector('td:nth-child(6) .prog-l').textContent : 0",
            "size": "row.querySelector('td:nth-child(4) .progress-bar').textContent.replace('K','000')",
            "url": "row.querySelector('td:nth-child(3) li:nth-child(2) a').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-24": {
        "name": "Scraper-24",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://apibay.org",
        "fallback_urls": [],
        "response_type": "json",
        "owner": "JD'z Provider Pack",
        "movie": {
            "query": "/q.php?q={query}&cat=207,202,201",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/q.php?q={query}&cat=208,205",
            "keywords": [
                "{title} {episodeCode}"
            ]
        },
        "season": {
            "query": "/q.php?q={query}&cat=208,205",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "json_format": {
            "title": "name",
            "seeds": "seeders",
            "peers": "leechers",
            "size": "size",
            "hash": "info_hash"
        },
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-25": {
        "name": "Scraper-25",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.torrentdownload.info",
        "response_type": "text",
        "separator": "+",
        "source_is_in_sub_page": true,
        "movie": {
            "query": "/search?q={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search?q={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search?q={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('table:nth-of-type(2) tbody tr:not(:first-child)')",
            "title": "row.querySelector('.tt-name a').textContent",
            "peers": "row.querySelector('.tdleech').textContent.replace(',','')",
            "seeds": "row.querySelector('.tdseed').textContent.replace(',','')",
            "size": "row.querySelector('.tdnormal:nth-of-type(3)').textContent",
            "url": "row.querySelector('.tt-name a').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-26": {
        "name": "Scraper-26",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.anirena.com",
        "response_type": "text",
        "separator": "+",
        "movie": {
            "query": "/?s={query}",
            "keywords": "{title}"
        },
        "episode": {
            "query": "/?s={query}",
            "keywords": [
                "{title} {absoluteNumber}",
                "{title} {episode}"
            ]
        },
        "season": {
            "query": "/?s={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/?s={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('div.full2')",
            "title": "row.querySelector('table tbody tr .torrents_small_info_data1 a:nth-child(2)').textContent",
            "peers": "row.querySelector('table tbody tr .torrents_small_leechers_data1').textContent",
            "seeds": "row.querySelector('table tbody tr .torrents_small_seeders_data1').textContent",
            "size": "row.querySelector('table tbody tr .torrents_small_size_data1').textContent",
            "url": "row.querySelector('table tbody tr .torrents_small_info_data2 a:nth-child(2)').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-27": {
        "name": "Scraper-27",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.torrentdownloads.me",
        "fallback_urls": [
            "https://www.torrentdownloads.info",
            "http://torrentdownloads.d4.re"
        ],
        "response_type": "text",
        "separator": "+",
        "source_is_in_sub_page": true,
        "movie": {
            "query": "/search/?search={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search/?search={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search/?search={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search/?search={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.inner_container')[1].querySelectorAll('.grey_bar3')",
            "title": "row.querySelector('p a').textContent",
            "peers": "row.querySelector('span:nth-child(3)').textContent",
            "seeds": "row.querySelector('span:nth-child(4)').textContent",
            "size": "row.querySelector('span:nth-child(5)').textContent",
            "url": "row.querySelector('p a').getAttribute('href').match('http') || row.querySelector('p a').getAttribute('href').match('php') ? null : row.querySelector('p a').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-28": {
        "name": "Scraper-28",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://kickass-kat.com",
        "fallback_urls": [],
        "response_type": "text",
        "separator": "%20",
        "movie": {
            "query": "/usearch/{query}/?field=seeders&sorder=desc",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/usearch/{query}/?field=seeders&sorder=desc",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/usearch/{query}/?field=seeders&sorder=desc",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/usearch/{query}/?field=seeders&sorder=desc",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.data tbody tr:not(.firstr)')",
            "title": "row.querySelector('td:nth-child(1) .torrentname .torType a').textContent",
            "peers": "row.querySelectorAll('.green').textContent",
            "seeds": "row.querySelectorAll('.red').textContent",
            "size": "row.querySelector('.nobr').textContent",
            "url": "decodeURIComponent(row.querySelector('td:nth-child(1) div:nth-child(1) a:nth-last-child(2)').getAttribute('href').replace('https://mylink.cx/?url=', '').trim())"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-29": {
        "name": "Scraper-29",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://torrentgalaxy.to",
        "fallback_urls": [],
        "response_type": "text",
        "separator": "+",
        "movie": {
            "query": "/torrents.php?search={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/torrents.php?search={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/torrents.php?search={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/torrents.php?search={query}",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.tgxtable .tgxtablerow')",
            "title": "row.querySelector('.tgxtablecell:nth-child(4) a:nth-child(1)').getAttribute('title')",
            "peers": "row.querySelector('.tgxtablecell:nth-child(11) span font:nth-child(2)').textContent",
            "seeds": "row.querySelector('.tgxtablecell:nth-child(11) span font:nth-child(1)').textContent",
            "size": "row.querySelector('.tgxtablecell:nth-child(8)').textContent",
            "url": "row.querySelector('.tgxtablecell:nth-child(5) a:nth-child(2)').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-30": {
        "name": "Scraper-30",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://eztv.io",
        "fallback_urls": [
            "https://eztv.re",
            "https://eztv.ag",
            "https://eztv.it",
            "https://eztv.ch"
        ],
        "response_type": "text",
        "episode": {
            "query": "/search/{query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search/{query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "html_parser": {
            "row": "doc.querySelectorAll('tr.forum_header_border')",
            "title": "row.querySelector('td:nth-child(2)').textContent",
            "peers": "row.querySelector('td:nth-child(6)').textContent",
            "seeds": "row.querySelector('td:nth-child(6)').textContent",
            "size": "row.querySelector('td:nth-child(4)').textContent",
            "url": "row.querySelector('td:nth-child(3) a').getAttribute('href')"
        },
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-31": {
        "name": "Scraper-31",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.skytorrents.to",
        "fallback_urls": [],
        "response_type": "text",
        "separator": "%20",
        "movie": {
            "query": "/?search={query}&sort=seeders",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/?search={query}&sort=seeders",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/?search={query}&sort=seeders",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "html_parser": {
            "row": "doc.querySelectorAll('tbody .result')",
            "title": "row.querySelector('td:nth-child(1) a').textContent",
            "peers": "row.querySelector('td:nth-child(6)').textContent",
            "seeds": "row.querySelector('td:nth-child(5)').textContent",
            "size": "row.querySelector('td:nth-child(2)').textContent",
            "url": "row.querySelectorAll('td:nth-child(1) a')[2].getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-32": {
        "name": "Scraper-32",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://glodls.to",
        "fallback_urls": [],
        "response_type": "text",
        "separator": "+",
        "movie": {
            "query": "/search_results.php?search={query}&cat=1&incldead=0&inclexternal=0&lang=1&sort=size&order=desc",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search_results.php?search={query}&cat=41&incldead=0&inclexternal=0&lang=1&sort=seeders&order=desc",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search_results.php?search={query}&cat=41&incldead=0&inclexternal=0&lang=1&sort=seeders&order=desc",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "html_parser": {
            "row": "doc.querySelectorAll('table.ttable_headinner tbody tr.t-row:nth-child(odd)')",
            "title": "row.querySelector('td:nth-child(2) a:nth-child(2)').textContent",
            "peers": "row.querySelector('td:nth-child(7)').textContent",
            "seeds": "row.querySelector('td:nth-child(6)').textContent",
            "size": "row.querySelector('td:nth-child(5)').textContent",
            "url": "row.querySelector('td:nth-child(4) a').getAttribute('href')"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-33": {
        "name": "Scraper-33",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.magnetdl.com",
        "fallback_urls": [
            "https://torrentquest.com"
        ],
        "response_type": "text",
        "separator": "-",
        "movie": {
            "query": "/{titleFirstLetter}/{query}/",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/{titleFirstLetter}/{query}/",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/{titleFirstLetter}/{query}/",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "html_parser": {
            "row": "doc.querySelectorAll('table.download tbody tr:nth-child(odd)')",
            "title": "row.querySelector('td:nth-child(2) a') ? row.querySelector('td:nth-child(2) a').getAttribute('title') : ''",
            "peers": "row.querySelector('td:nth-child(8)') ? row.querySelector('td:nth-child(8)').textContent : ''",
            "seeds": "row.querySelector('td:nth-child(7)') ? row.querySelector('td:nth-child(7)').textContent : ''",
            "size": "row.querySelector('td:nth-child(6)') ? row.querySelector('td:nth-child(6)').textContent.replace(',','') : ''",
            "url": "row.querySelector('td:nth-child(1) a') ? row.querySelector('td:nth-child(1) a').getAttribute('href') : ''"
        },
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-34": {
        "name": "Scraper-34",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://btdb.eu",
        "fallback_urls": [],
        "response_type": "text",
        "separator": "%20",
        "movie": {
            "query": "/search/{query}/0/?sort=popular",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search/{query}/0/?sort=popular",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search/{query}/0/?sort=popular",
            "keywords": [
                "{title} {season4ode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search/{query}/0/?sort=popular",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.card-body .media')",
            "title": "row.querySelector('.media-body .item-title').textContent",
            "peers": "row.querySelector('.item-meta-info small:nth-child(4) strong').textContent",
            "seeds": "row.querySelector('.item-meta-info small:nth-child(3) strong').textContent",
            "size": "row.querySelector('.item-meta-info small:nth-child(1) strong').textContent",
            "url": "row.querySelector('.media-right a:nth-child(1)').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-35": {
        "name": "Scraper-35",
        "enabled": true,
        "languages": [
            "ru"
        ],
        "base_url": "http://rutor.info",
        "response_type": "text",
        "_owner": "JD'z Provider Pack",
        "movie": {
            "query": "/search/{query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search/{query}",
            "keywords": "{title} {season}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('tbody tr')",
            "title": "row.querySelector('td:nth-child(2)').innerText",
            "peers": "row.querySelector('td:nth-last-child(1) span.green').innerText",
            "seeds": "row.querySelector('td:nth-last-child(1) span.red').innerText",
            "size": "row.querySelector('td:nth-last-child(2)').innerText",
            "url": "row.querySelector('td:nth-child(2) a:nth-child(2)').getAttribute('href')"
        }
    },
    "Scraper-36": {
        "name": "Scraper-36",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://solidtorrents.net/api/v1/search?q={query}&category=video&sort=seeders",
        "response_type": "json",
        "separator": "%20",
        "movie": {
            "query": "",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "",
            "keywords": "{title} {absoluteNumber}"
        },
        "json_format": {
            "results": "results",
            "url": "magnet",
            "title": "title",
            "seeds": "swarm.seeders",
            "peers": "swarm.leechers",
            "size": "size",
            "hash": "info_hash"
        },
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-37": {
        "name": "Scraper-37",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://nyaa.si",
        "fallback_urls": [],
        "response_type": "text",
        "movie": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {absoluteNumber}"
        },
        "season": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/?f=0&c=1_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {absoluteNumber}"
        },
        "separator": "+",
        "html_parser": {
            "row": "doc.querySelectorAll('.torrent-list tbody tr')",
            "title": "row.querySelector('td:nth-child(2) a:last-child').textContent",
            "peers": "row.querySelector('td:nth-child(7)').textContent",
            "seeds": "row.querySelector('td:nth-child(6)').textContent",
            "size": "row.querySelector('td:nth-child(4)').textContent",
            "url": "row.querySelector('td:nth-child(3) a:nth-child(2)').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-38": {
        "name": "Scraper-38",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://nyaa.si",
        "fallback_urls": [],
        "response_type": "text",
        "_owner": "JD'z Provider Pack",
        "movie": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {episode}"
        },
        "season": {
            "query": "/?f=0&c=1_0&q={query}&s=seeders&o=desc",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/?f=0&c=0_0&q={query}&s=seeders&o=desc",
            "keywords": "{title} {episode}"
        },
        "separator": "+",
        "html_parser": {
            "row": "doc.querySelectorAll('.table-responsive tbody > tr')",
            "title": "row.querySelector('td:nth-child(2) a').textContent",
            "peers": "row.querySelector('td:nth-child(7)').textContent.trim()",
            "seeds": "row.querySelector('td:nth-child(6)').textContent.trim()",
            "size": "row.querySelector('td:nth-child(4)').textContent.trim()",
            "url": "row.querySelector('td:nth-child(3) a:nth-child(2)').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-39": {
        "name": "Scraper-39",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://www.limetorrents.info",
        "fallback_urls": [
            "https://www.limetorrents.asia",
            "https://www.limetorrents.zone"
        ],
        "response_type": "text",
        "separator": "-",
        "movie": {
            "query": "/search/movies/{query}/seeds/1/",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search/tv/{query}/seeds/1/",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search/tv/{query}/seeds/1/",
            "keywords": "{title} {seasonCode}"
        },
        "anime": {
            "query": "/search/anime/{query}/seeds/1/",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('.table2 tbody tr:nth-child(n+2)')",
            "title": "row.querySelector('.tt-name').textContent",
            "peers": "row.querySelector('.tdseed').textContent.replace(',','')",
            "seeds": "row.querySelector('.tdleech').textContent.replace(',','')",
            "size": "row.querySelector('.tdnormal:nth-child(3)').textContent",
            "url": "row.querySelector('.tt-name a:nth-child(2)').getAttribute('href')"
        },
        "source_is_in_sub_page": true,
        "title_replacement": {
            ".": "",
            ":": "",
            "'": "",
            "&": ""
        }
    },
    "Scraper-40": {
        "name": "Scraper-40",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://1337x.to",
        "fallback_urls": [
            "https://1337x.st",
            "https://1337x.is",
            "https://1337x.am",
            "https://x1337x.ws",
            "https://x1337x.eu",
            "https://x1337x.se",
            "https://1337x.unblocked.llc",
            "https://1337x.unblocker.cc",
            "https://1337x.unblockall.org"
        ],
        "response_type": "text",
        "movie": {
            "query": "/category-search/{query}/Movies/1/",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "  ",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/sort-category-search/{query}/TV/size/desc/1/",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/category-search/{query}/Anime/1/",
            "keywords": "{title} {episode}"
        },
        "separator": "+",
        "html_parser": {
            "row": "doc.querySelectorAll('tbody > tr')",
            "title": "row.querySelector('a:nth-child(2)').innerHTML",
            "peers": "row.querySelector('.leeches').innerHTML",
            "seeds": "row.querySelector('.seeds').innerHTML",
            "size": "row.querySelector('tbody > tr .size').textContent.split('B')[0] + 'B'",
            "url": "row.querySelector('a:nth-child(2)').getAttribute('href')"
        },
        "source_is_in_sub_page": true,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-41": {
        "name": "Scraper-41",
        "enabled": true,
        "languages": [
            "fr"
        ],
        "base_url": "https://www.oxtorrent.com",
        "fallback_urls": [],
        "response_type": "text",
        "movie": {
            "query": "/recherche/{query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/recherche/{query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/recherche/{query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/recherche/{query}",
            "keywords": "{title} {episode}"
        },
        "separator": "%20",
        "html_parser": {
            "row": "doc.querySelectorAll('tbody > tr')",
            "title": "row.querySelector('a:nth-child(2)').innerHTML",
            "peers": "row.querySelector(':nth-child(4)').textContent.trim()",
            "seeds": "row.querySelector(':nth-child(3)').textContent.trim()",
            "size": "row.querySelector('td:nth-child(2)').textContent.trim()",
            "url": "row.querySelector('a:nth-child(2)').getAttribute('href')"
        },
        "source_is_in_sub_page": true,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-42": {
        "name": "Scraper-42",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "http://pirateiro.com",
        "fallback_urls": [
            "https://pirateiro.unblocked.nz"
        ],
        "response_type": "text",
        "movie": {
            "query": "/torrents/?c300=1&search={query}&orderby=tamanho",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/torrents/?search={query}&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/torrents/?search={query}&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/torrents/?search={query}&c100=1&c700=1&qualityvideo=0&audiolanguage=0&subtitle=0&imdbrating=0",
            "keywords": "{title} {absoluteNumber}"
        },
        "html_parser": {
            "row": "doc.querySelectorAll('tr.impar')",
            "title": "row.querySelector('a > b').textContent",
            "peers": "row.querySelector('td:nth-child(6) > b > font').textContent.replace(' ', '')",
            "seeds": "row.querySelector('b > font').textContent.replace(' ', '')",
            "size": "row.querySelector('td > font').textContent",
            "url": "row.querySelector('a.imagnet.icon16').getAttribute('href')"
        },
        "source_is_in_sub_page": false
    },
    "Scraper-43": {
        "name": "Scraper-43",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "http://7torr.com",
        "fallback_urls": [],
        "response_type": "text",
        "movie": {
            "query": "/search?q={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search?q={query}",
            "keywords": "{title} {episodeCode}"
        },
        "season": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search?q={query}",
            "keywords": "{title} {episode}"
        },
        "separator": "+",
        "html_parser": {
            "row": "doc.querySelectorAll('tbody tr')",
            "title": "row.querySelector('td:nth-child(1) .rtitle a').textContent",
            "peers": "row.querySelector('td:nth-child(5)').textContent",
            "seeds": "row.querySelector('td:nth-child(4)').textContent",
            "size": "row.querySelector('td:nth-child(2)').textContent",
            "url": "row.querySelector('td:nth-child(6) a').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
    "Scraper-44": {
        "name": "Scraper-44",
        "enabled": true,
        "languages": [
            "en"
        ],
        "base_url": "https://animetosho.org",
        "fallback_urls": [],
        "response_type": "text",
        "movie": {
            "query": "/search?q={query}",
            "keywords": "{title} {year}"
        },
        "episode": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {absoluteNumber}",
                "{title} {episode}"
            ]
        },
        "season": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {seasonCode}",
                "{title} season"
            ]
        },
        "anime": {
            "query": "/search?q={query}",
            "keywords": [
                "{title} {absoluteNumber}",
                "{title} {episode}"
            ]
        },
        "separator": "+",
        "html_parser": {
            "row": "doc.querySelectorAll('.home_list_entry')",
            "title": "row.querySelector('.link a').textContent",
            "peers": "row.querySelector('span:nth-child(5)').textContent.match(/\d+/g)[1]",
            "seeds": "row.querySelector('span:nth-child(5)').textContent.match(/\d+/g)[0]",
            "size": "row.querySelector('.size').textContent",
            "url": "row.querySelector('.links a:nth-child(4)').getAttribute('href')"
        },
        "source_is_in_sub_page": false,
        "title_replacement": {
            "'s": "s",
            "\"": ""
        }
    },
  "Scraper-45": {
    "anime": {
      "keywords": "{title} {episode}",
      "query": "/search?q={query}"
    },
    "base_url": "https://zooqle.com",
    "enabled": true,
    "episode": {
      "keywords": "{title} {episodeCode}",
      "query": "/search?q={query}"
    },
    "fallback_urls": [
      "https://zooqle.t0r.club",
      "https://zooqle-com.unblocksites.fun",
      "https://zooqle.unblocked.win",
      "https://zooqle.nocensor.xyz",
      "https://zooqle.unblocked.llc",
      "https://zooqle.unblocked.krd",
      "https://zooqle.p4y.info"
    ],
    "html_parser": {
      "peers": "row.querySelector('td:nth-child(6) .prog-r') ? row.querySelector('td:nth-child(6) .prog-r').textContent : 0",
      "row": "doc.querySelectorAll('.table-torrents tbody tr')",
      "seeds": "row.querySelector('td:nth-child(6) .prog-l') ? row.querySelector('td:nth-child(6) .prog-l').textContent : 0",
      "size": "row.querySelector('td:nth-child(4) .prog-l').textContent.replace('K','000')",
      "title": "row.querySelector('a').textContent",
      "url": "row.querySelectorAll('a')[2].getAttribute('href')"
    },
    "languages": [
      "en"
    ],
    "movie": {
      "keywords": "{title} {year}",
      "query": "/search?q={query}"
    },
    "name": "Scraper-45",
    "response_type": "text",
    "season": {
      "keywords": "{title} {seasonCode}",
      "query": "/search?q={query}"
    },
    "separator": "+",
    "source_is_in_sub_page": false,
    "title_replacement": {
      "&": "",
      "'": "",
      ".": "",
      ":": ""
    }
  }
}
