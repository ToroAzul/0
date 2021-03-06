console.log('Resetting config.db to initial state......');

const fs = require('fs');
const path = require('path');

let records = '{"type":"win-state","maxed":false,"position":[null,null],"size":[1280,800],"_id":"0"}\n' +
    '{"type":"trackers","url":"https://newtrackon.com/api/stable","trackers":["http://tracker.tfile.me:80/announce","udp://tracker.torrent.eu.org:451/announce","udp://thetracker.org:80/announce","http://torrent.nwps.ws:80/announce","http://alpha.torrenttracker.nl:443/announce","http://0d.kebhana.mx:443/announce","udp://bt.xxx-tracker.com:2710/announce","udp://inferno.demonoid.pw:3418/announce","udp://tracker.justseed.it:1337/announce","udp://tracker.vanitycore.co:6969/announce","udp://open.stealth.si:80/announce","udp://tracker.coppersurfer.tk:6969/announce","udp://tracker.opentrackr.org:1337/announce","udp://tracker.cypherpunks.ru:6969/announce","udp://tracker.tiny-vps.com:6969/announce","http://retracker.mgts.by:80/announce","udp://retracker.lanta-net.ru:2710/announce","udp://public.popcorn-tracker.org:6969/announce","http://tracker.skyts.net:6969/announce","udp://ipv4.tracker.harry.lu:80/announce","http://tracker.city9x.com:2710/announce","udp://tracker.martlet.tk:6969/announce","http://retracker.telecom.by:80/announce","udp://9.rarbg.com:2710/announce"],"_id":"1"}\n' +
    '{"type":"search","rs_count":100,"smart":true,"inst":false,"useAC":true,"history":[],"_id":"2"}\n' +
    '{"type":"dump","updURL":"https://thepiratebay.org/static/dump/csv/torrent_dump_full.csv.gz","updLast":"2003-01-01T00:00:00.000Z","updType":"notify","updInt":10,"keepDL":true,"updStat":["complete","",""],"_id":"3"}\n' +
    '{"type":"gen","sysTray":true,"logToFile":true,"useDHT":true,"supMsg":"' + new Date().toISOString() +'","confVer":"1.0","_id":"4"}\n' +
    '{"type":"etc","thmURL":"https://github.com/techtacoriginal/offlinebay-themes","appUpdURL":"https://raw.githubusercontent.com/techtacoriginal/ob_release/master/release.json","_id":"5"}\n';

fs.writeFile(path.join(__dirname, 'data', 'config.db'), records, function (err) {
    err ? console.error(err + '\nFailed to reset the DB\n') : console.log('Task completed successfully');
});