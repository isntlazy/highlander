<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer
                    permanent
                    clipped
                    class="grey lighten-4"
                    app
            >
                <v-list
                        dense
                        class="grey lighten-4"
                >
                    <template v-for="(item, i) in items">
                        <v-layout
                                row
                                v-if="item.heading"
                                align-center
                                :key="i"
                        >
                            <v-flex xs6>
                                <v-subheader class="caption" v-if="item.heading">
                                    <v-icon>{{ item.icon }} &nbsp;&nbsp;</v-icon> {{ item.heading }}
                                </v-subheader>
                            </v-flex>
                            <v-flex>
                                <v-btn flat icon color="deep-orange">
                                    <v-icon>add</v-icon>
                                </v-btn>
                                <v-btn flat icon color="indigo">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-divider
                                dark
                                v-else-if="item.divider"
                                class="my-2"
                                :key="i"
                        ></v-divider>
                        <v-list-tile
                                :key="i"
                                v-else
                                @click=""
                        >

                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <router-link :to="item.link">
                                <v-list-tile-content>
                                    <v-list-tile-title class="text--darken-1 grey--text">
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </router-link>

                        </v-list-tile>
                    </template>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar color="orange darken-1" app absolute clipped-left>
                <span class="title">Панель&nbsp;<span class="text">Управління</span></span>
            </v-toolbar>
            <main>
                <v-content>
                    <v-container fluid fill-height class="grey lighten-4">
                        <v-layout justify-center align-center>
                            <router-view></router-view>

                        </v-layout>
                    </v-container>
                </v-content>
            </main>
        </v-app>

    </div>
</template>

<script>
	export default {
		data: () => ({
			items: [
                { icon: 'dashboard', text: 'Панель управління', link: '/adm' },
                { divider: true },
                { heading: 'ТОВАРИ', icon: 'apps'},
                { icon: 'copyright', text: 'Бренди', link: '/adm/brands' },
                { icon: 'dehaze', text: 'Характеристики', link: '/adm/products/add' },
                { icon: 'colorize', text: 'Кольори', link: '/adm/products/add' },
                { icon: 'brightness_medium', text: 'Сезони', link: '/adm/products/add' },
                { icon: 'directions_bike', text: 'Призначення', link: '/adm/products/add' },
                { icon: 'accessibility', text: 'Розміри', link: '/adm/products/add' },
                { icon: 'wc', text: 'Статі', link: '/adm/products/add' },
                { icon: 'people', text: 'Власники', link: '/adm/products/add' },
                { heading: 'КАТЕГОРІЇ', icon: 'folder'},
                { heading: 'ЗАМОВЛЕННЯ', icon: 'shopping_basket'},
//				{ icon: 'lightbulb_outline', text: 'Notes' },
//				{ icon: 'touch_app', text: 'Reminders' },
//				{ divider: true },
//				{ heading: 'ТОВАРИ' },
//				{ icon: 'add', text: 'Додати', link: '/adm/products/add' },
//				{ icon: 'edit', text: 'Редагувати', link: '/adm/products' },
//				{ divider: true },
//                { heading: 'КАТЕГОРІЇ' },
//                { icon: 'add', text: 'Додати' },
//                { icon: 'edit', text: 'Редагувати' },
//                { divider: true },
//                { heading: 'ПОКУПКИ' },
//                { icon: 'add', text: 'Огляд' },
//                { icon: 'edit', text: 'Статистика' },
//                { divider: true },
//				{ icon: 'archive', text: 'Бекапи' },
//				{ icon: 'delete', text: 'Смітник' },
//				{ divider: true },
//				{ icon: 'settings', text: 'Налаштування' },
//				{ icon: 'chat_bubble', text: 'Trash' },
//				{ icon: 'help', text: 'Допомога' },
//				{ icon: 'phonelink', text: 'App downloads' },
//				{ icon: 'keyboard', text: 'Keyboard shortcuts' }
			]
		}),
		props: {
			source: String
		}
	}
</script>

<style>
    #keep main .container {
        height: 660px;
    }
    .navigation-drawer__border {
        display: none;
    }
    .text {
        font-weight: 400;
    }
    li a {
        text-decoration: none;
    }
</style>

