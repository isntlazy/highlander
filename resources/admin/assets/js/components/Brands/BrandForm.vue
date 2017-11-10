<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
                label="Назва"
                v-model="name"
                :rules="nameRules"
                :counter="25"
                required
        ></v-text-field>

        <v-btn
                @click="submit"
                :disabled="!valid"
        >
            Зберегти
        </v-btn>
        <v-btn @click="clear">Очистити</v-btn>
    </v-form>

</template>

<script>
	export default {
		data: () => ({
			valid: true,
			name: '',
			nameRules: [
				(v) => !!v || 'Будь ласка введіть назву бренду',
				(v) => v && v.length <= 25 || 'Назва повинна бути не довшою 25 символів'
			],
		}),
		methods: {
			submit () {
				if (this.$refs.form.validate()) {
					axios.post('/api/submit', {
						name: this.name
					})
				}
			},
			clear () {
				this.$refs.form.reset()
			}
		}
	}
</script>
