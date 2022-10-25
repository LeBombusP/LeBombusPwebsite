<script>
// @ts-nocheck
  import {Route} from 'tinro';

  import Authguard from './components/authguard.svelte';
  import Transition from './components/transition.svelte';

  import Main from './pages/main.svelte';
  import Login from './pages/login.svelte';
  import Dashboard from './pages/dashboard.svelte';

  window.onload = (e) => { document.body.classList.remove('preload') };
</script>

<Transition>
  <Route path="/">
    <Main />
  </Route>

  <Route path="/dashboard">
    <Authguard>
      <div slot="not_authed">
        <Login />
      </div>
      <div slot="authed">
        <Dashboard />
      </div>
    </Authguard>
  </Route>
</Transition>