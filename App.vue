<script>
	import {
		useUserstore
	} from "@/store/user.js"
	import {
		onLoad
	} from "@dcloudio/uni-app"
  import { useThemeterStor } from "@/store/theme.js"
	export default {
		methods: {
			p() {
				const A = useUserstore()
				A.GetUser()
				if (!uni.getStorageSync('Darft')) {
					uni.setStorageSync('Darft', JSON.stringify({
						"key": []
					}))
				}
			},
			A(){
				const Theme=useThemeterStor()
				Theme.GetTheme()
			}
		},
		onLaunch: function() {
			try {
				this.p()
							this.A()
			} catch (e) {
				console.log("失败");
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: "得意黑 斜体";
		src: url('https://mp-e233ef62-9c0e-4622-a1aa-7115f4048c07.cdn.bspapp.com/SMILEYSANS-OBLIQUE-2.TTF');
		font-weight: normal;
		font-style: normal;
	}

	@keyframes after {
		0% {
			width: 0%;
		}

		100% {
			width: 100%;
		}
	}

	page {
		margin: 0;
		padding: 0;
		box-sizing: content-box;
		font-family: "得意黑 斜体";

	}

	image {
		will-change: transform; //解决加载时瞬间拉伸问题
		width: auto; //解决加载时瞬间拉伸问题
		height: auto; //解决加载时瞬间拉伸问题
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
		-ms-interpolation-mode: nearest-neighbor;
	}

	/*每个页面公共css */
</style>