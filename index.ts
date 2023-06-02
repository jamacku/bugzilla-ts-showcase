import BugzillaAPI from 'bugzilla';

let api = new BugzillaAPI('https://bugzilla.mozilla.org');
console.log(await api.version());
