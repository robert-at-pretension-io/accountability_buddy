<!-- This page contains the header, content slot, and footer of all pages. Because of this, it will also contain the authentication code for user login. -->
<script type="ts">
    import { onMount } from 'svelte';

	let isAuthenticated = false;
	let email : string  = '';
	let password : string | null = null;

    // We will overload onMount to check if the user is already authenticated.
    // If they are, we will set the isAuthenticated variable to true.

    onMount(() => {
        // Loop through keys in local storage and set them to page variables
        for (let key in localStorage) {
            if (key === 'email') {
                email = localStorage.getItem(key)? localStorage.getItem(key) as string : '' ;
            } else if (key === 'password') {
                password = localStorage.getItem(key);
            }
            else if (key === 'isAuthenticated') {
                isAuthenticated = localStorage.getItem(key) === 'true';
            }

        }
    });

	function logout() {
        unsetLocalStorage();
	}

	function login() {
        if (email === '' || password === null) {
            alert('Please enter an email and password');
            return;
        }
		if (email.length > 0 && password === 'password') {
            isAuthenticated= true;
            setLocalStorage();
		} else {
			// password was incorrect, show error
		}
	}

    // This function sets the local storage for all variables
    // that are used in the application.
    function setLocalStorage() {
        isAuthenticated = true;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password as string);
        localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    }

    // This function unsets all local storage variables. Useful as a utility function for when the user logs out.
    function unsetLocalStorage() {
        isAuthenticated = false;
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('isAuthenticated');
    }
</script>

<div id="page">
	<body>
		<div id="header">
			<!-- conditionally display login/logout button -->
			{#if isAuthenticated}
				<span>Welcome, {email}. <button id='logout' on:click={logout}>Logout</button> </span>
			{:else}
				<!-- form with email and password -->
				<form on:submit|preventDefault={login}>
					<span>
						<input type="email" placeholder="Email" name="email" bind:value={email} />
						<input type="password" placeholder="Password" name="password" bind:value={password} />
						<button type="submit" id='login'>Login</button>
					</span>
				</form>
			{/if}
		</div>

        <!-- Only show content if the user is authenticated -->
		{#if isAuthenticated}
        <div id="content">
			<slot />
		</div>
        {/if}

		<div id="footer">
			<p>&copy; Accountability Buddy 2022</p>
		</div>
	</body>
</div>

<style>
	#header {
		background: #333;
		color: #fff;
		padding: 20px;
		text-align: center;
	}
</style>
