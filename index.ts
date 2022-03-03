import BugzillaAPI from 'bugzilla';

async function app() {
  const api = new BugzillaAPI('https://bugzilla.mozilla.org');
  await api.version();
}

app();
