<template>
    <div class="container">
        <div class="box mx-6 my-6 p-6" id="loginBox">
            <div class="field">
                <label class="label">Pick a Username:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="ex: doctor_evil_1999">
                </div>
            </div>

            <div class="field">
                <label class="label">Pick a Password:</label>
                <div class="control">
                    <input class="input" type="password" placeholder="*******">
                </div>
            </div>

            <div class="field">
                <label class="label">Enter Email:</label>
                <div class="control">
                    <input class="input" type="email" placeholder="example@ex.com">
                </div>
            </div>

            <div class="field">
                <label class="label">Enter Phone Number:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="666-666-6666">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    Name: 'Signup',
    components: { 

     }
}

</script>
