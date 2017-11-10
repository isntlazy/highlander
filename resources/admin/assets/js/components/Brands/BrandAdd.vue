<template>
    <div>
        <h4>Додати новий бренд</h4>
        <brand-form></brand-form>
    </div>
</template>

<script>
    import BrandForm from "./BrandForm"
	export default {
		mounted() {
			console.log('Component mounted.')
		},
        components: {
			BrandForm
        }
	}
</script>
