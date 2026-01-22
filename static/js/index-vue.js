const { createApp } = Vue;

const link = '../';

const app = createApp({
    data() {
        return {
            // 网站信息
            name: '杭州丽桑卓网络科技有限公司',
            icp: '苏ICP备2025197613号',
            tel: '4005488643',

            // 顶部导航链接
            link1: link,
            link2: link,
            link3: link,
            link4: link,
            link5: link,
            link6: link,
            link7: link,
            link8: link,
            link9: link,
            link10: link,
            linkall: link,

            // 顶部软件图标
            src1: 'static/images/icon/yyy.avif',
            src2: 'static/images/icon/wsp.avif',
            src3: 'static/images/icon/zoom.avif',
            src4: 'static/images/icon/kk.avif',
            src5: 'static/images/icon/sgsrf.avif',
            src6: 'static/images/icon/qishui.avif',
            src7: 'static/images/icon/deepl.avif',
            src8: 'static/images/icon/wyy.avif',
            src9: 'static/images/icon/yd.avif',
            src10: 'static/images/icon/ggyx.avif',

            // 顶部软件名称
            text1: '易歪歪',
            text2: 'WhatsApp',
            text3: 'ZOOM',
            text4: '夸克',
            text5: '搜狗',
            text6: '汽水音乐',
            text7: 'deepl翻译',
            text8: '网易云音乐',
            text9: '有道翻译',
            text10: '谷歌邮箱',

            // 顶部文字按钮隐藏与显示
            distyle0: {
                display: 'block',
                float: 'left'
            },
            distyle1: {
                display: 'block',
                float: 'left'
            },
            distyle2: {
                display: 'none',
                float: 'left'
            },
            distyle3: {
                display: 'none',
                float: 'left'
            },
            distyle4: {
                display: 'none',
                float: 'left'
            },
            distyle5: {
                display: 'none',
                float: 'left'
            },
            distyle6: {
                display: 'none',
                float: 'left'
            },
            distyle7: {
                display: 'none',
                float: 'left'
            },
        }
    },
    mounted() {
        this.loadDependencies();
    },
    methods: {
        loadDependencies() {
            // 按顺序加载依赖
            this.loadScript('static/js/jquery2.1.4.min.js')
            .then(() => this.loadScript('static/js/jquery.superslide.2.1.3.js'))
            .then(() => this.loadScript('static/js/index.js'))
        },
        loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        }
    }
});

app.mount('#app');