<template>
	<div class="sidebar">
		<transition name="slide">
			<nav
				v-show="show"
				class="menu"
				:style="{
					width: menuWidth,
					marginTop: navHeight,
				}"
			>
				<div v-if="showTags" class="tags">
					<ul>
						<li v-for="tag in tags" :key="tag.id" class="tag">
							<h3>
								<g-link
									style="padding-left: 2rem"
									class="style-as-link-header"
									:to="tag.path"
								>
									{{ tag.name }}
								</g-link>
							</h3>
						</li>
					</ul>
				</div>
				<div
					v-if="showCategories || showPosts"
					class="categories"
					:class="paddingLeft['padding-left'] === '2rem' ? 'accent' : ''"
				>
					<ul>
						<li
							v-for="category in categories"
							:key="category.id"
							class="category"
						>
							<h3>
								<g-link
									:style="paddingLeft"
									class="style-as-link-header"
									:to="category.path"
								>
									{{ category.name }}
								</g-link>
							</h3>
							<ul v-if="category.id === postCategory">
								<li
									v-for="post in posts[category.id]"
									:key="post.id"
									class="post"
								>
									<g-link class="style-as-link-header" :to="post.path">
										{{ post.title }}
									</g-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</transition>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import { scrollSidebarActiveIntoView } from '~/helpers'

	export default {
		name: 'sidebar',
		props: {
			postCategory: {
				type: String,
				required: false,
				default: '',
			},
			showPosts: { type: Boolean, required: false, default: false },
			showTags: { type: Boolean, required: false, default: false },
			showCategories: { type: Boolean, required: false, default: false },
		},
		methods: {
			...mapActions([
				'getCategories',
				'getPosts',
				'getTags',
				'getSidebarWidth',
			]),
		},
		data() {
			return {
				menuWidth: 200 + 'px',
				paddingLeft: { 'padding-left': '1rem' },
				show: false,
			}
		},

		computed: {
			...mapState(['tags', 'categories', 'posts', 'navHeight']),
		},

		async mounted() {
			if ((this.showCategories && this.showPosts) || this.showPosts) {
				this.menuWidth = '300px'
				this.getSidebarWidth(300)
			}

			if (!this.showPosts && (this.showCategories || this.showTagsisIndex)) {
				this.paddingLeft = { 'padding-left': '2rem' }
			}

			const fetch = this.$fetch

			if (this.showCategories || this.showPosts) {
				const res = await this.$fetch('/'),
					categories = res.data.allCategory.edges
				this.getCategories({ categories, fetch })
			}

			try {
				const res = await fetch('/tags'),
					tags = res.data.allTag.edges
				this.getTags({ tags })
			} catch (error) {
				console.error(error)
			}
			this.$root.$on('toggle-sidebar', (data) => {
				this.show = data && !this.show
				scrollSidebarActiveIntoView()
			})
		},
	}
</script>

<style lang="scss">
	.sidebar {
		.slide-enter-active {
			transition: $transition;
		}
		.slide-leave-active {
			transition: $transition;
		}
		.slide-enter,
		.slide-leave-to {
			transform: translateX(-100%);
		}
		.menu {
			height: 100%;
			border-right: $border;
			width: 0;
			position: fixed;
			left: 0;
			z-index: 2;
			top: 0;
			background: $background-secondary;
			overflow-x: hidden;
			padding: 2rem 0;
			padding-bottom: 6rem;

			a {
				font-weight: 400;
			}
			.categories,
			.tags,
			.nav-links {
				.active {
					position: relative;
					&:after {
						width: 100px;
					}
					font-weight: 600;
					background-color: scale-color($primary, $lightness: 90%);
				}
				ul {
					margin: 0;
					li {
						margin: 0;
						h3 {
							a {
								&:after {
									left: 0.1rem;
								}
							}
							a.style-as-link-header {
								&:before {
									left: 0.1rem;
								}
							}
						}
						// before for link tag. Can't have :before and :after in same css selection
						a.style-as-link-header {
							padding: 0.75rem 1.5rem 0.75rem;
							text-decoration: none;
							display: block;
							line-height: 1.5;
							position: relative;

							&:before {
								content: '';
								left: 0.75rem;
								top: 1.3rem;
								height: 0px;
								width: 0px;
								position: absolute;
								transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
								background-color: $primary;
								transform: scale(1);
								border-radius: 100%;
							}
							border: 1px solid transparent;
							&:hover {
								border: 1px solid $link-hover-color;
								position: relative;
								&:before {
									width: 8px;
									height: 8px;
								}
							}
						}
						// after for link tag
						a {
							&:after {
								background-color: $primary;
								opacity: 1;
								transform: translateX(-92px);
								width: 0px;
								border-radius: 4px;
								content: '';
								left: 0.75rem;
								top: 1.3rem;
								height: 8px;
								position: absolute;
								transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
							}
						}
						&.category,
						&.tag {
							h3 {
								margin-bottom: 0;
							}
						}
						&.post {
							a.style-as-link-header {
								font-size: 0.875rem;
								padding-left: 2rem;
							}
						}
						&.tag {
							font-weight: 500;
						}
						@include style-as-link-header(
							'padding-left 0.3s ease, color $transition'
						);
					}
				}
				.posts {
					ul {
						li {
							a.style-as-link-header {
								font-size: 1rem;
							}
							@include style-as-link-header(
								'padding-left 0.3s ease, color $transition'
							);
						}
					}
				}
			}
			.tags,
			.accent,
			.nav-links {
				ul {
					li {
						h3 {
							a {
								&:after {
									left: 0.75rem;
								}
							}
							a.style-as-link-header {
								&:before {
									left: 0.75rem;
								}
							}
						}
					}
				}
			}
			.closebtn {
				position: absolute;
				top: 0;
				right: 25px;
				font-size: 36px;
				margin-left: 50px;
			}
		}
		.hamburger-icon {
			position: relative;
			top: -50px;
			float: left;
		}

		@media screen and (max-height: 450px) {
			.menu {
				padding-top: 15px;
				a {
					font-size: 18px;
				}
			}
		}

		@media screen and (min-width: 900px) {
			.menu {
				display: block !important;
				transition: margin-top 0.3s ease;
				&.index {
					display: none !important;
				}
			}
		}

		@include small-breakpoint {
			.menu {
				border: none;
				width: 100% !important;
			}
		}
	}
</style>

<static-query>
query {
	allCategory(sort: [{ by: "index" , order: DESC}, { by: "name", order: DESC }]) {
		totalCount
		edges {
			node {
				id
				path
				name
				description
				index
			}
		}
	}
}
</static-query>
