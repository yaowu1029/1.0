var parser = require('cloud/rssparser-1.0.0.js');
parser.initialize('http://www.huffingtonpost.com/feeds/index.xml', 'TEST');
parser.parse(success,error,map);