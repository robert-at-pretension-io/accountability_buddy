<!-- This page contains the header, content slot, and footer of all pages. Because of this, it will also contain the authentication code for user login. -->
<script type="ts">
	let isAuthenticated = false;
	let email = '';
	let password = '';

	function logout() {
		localStorage.removeItem('token');
		isAuthenticated = false;
		// window.location.reload();
	}

	function login() {
		if (email.length > 0 && password === 'password') {
			localStorage.setItem('token', email);
			isAuthenticated = true;
			// window.location.reload();
		} else {
			// password was incorrect, show error
		}
	}
</script>

<!DOCTYPE html>
<div id="page">
	<body>
		<div id="header">
			<!-- conditionally display login/logout button -->
			{#if isAuthenticated}
				<span>Welcome, {email}. <button on:click={logout}>Logout</button> </span>
			{:else}
				<!-- form with email and password -->
				<form on:submit={login}>
					<span>
						<input type="email" placeholder="Email" name="email" bind:value={email} />
						<input type="password" placeholder="Password" name="password" bind:value={password} />
						<button type="submit">Login</button>
					</span>
				</form>
			{/if}
		</div>

		<div id="content">
			<slot />
		</div>

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
