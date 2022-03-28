import BugzillaAPI from 'bugzilla';

let api = new BugzillaAPI('https://bugzilla.mozilla.org');

await api.version();
console.log(await api.whoami());
