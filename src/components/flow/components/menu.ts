export default (callback: any) => {
    return [
        {
            label: '选区',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=',
            callback: () => {
                /*lf.extension.selectionSelect.openSelectionSelect();
                lf.once('selection:selected', () => {
                    lf.extension.selectionSelect.closeSelectionSelect();
                });*/
                callback && callback()
            }
        },
        /*{
            label: 'html文本',
            type: 'html',
            text: 'html',
            callback: () => {
                //console.log('callback')
            }
        },*/
        {
            type: 'start',
            text: '开始',
            label: '开始节点',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==',
        },
        {
            type: 'userTask',
            label: '用户任务',
            text: '用户任务',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
            className: 'important-node'
        },
        {
            type: 'sysTask',
            label: '系统任务',
            text: '系统任务',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAkZJREFUWEft1kuITmEcx/HPs7GTjKQotyi5lMsU21mhDAuZspEUio1IE6kxCxspCyS3lR1lIWUlFsJGSiFJkhpNEQuTknqc/8yZC+Z955xpNKl56vTWeZ/n//8+v//tJJO80iT7NwXwvyqQt2A+ZuAjPpDujSefaiqQ5+AcduA7XmN16bibdLIuRA2A3ILP+IpuXCH1kZfgYPH+EHpI8+pA1AG4jXZSgzP9IG8G4KorURFg6PZjGM930UJaX1WFqgDLi7i/QCvpaWPj+QiOk2ZNNMAGPMYK0ssmAAdwijRzogGi5N7jMOlsE4AbWEpaM9EA0/AWvaTW0Y0P5cll0v4JBghzeQ+u4UGZ6fFbrry72NCFhY2rZHSkikk45CgaUMgc6xm+Ff0g6n5xmaQdzXPkb4i6AOcRbXjBKPeJKrk58DRL1N9PVgTIm0v5I7tv4QLp0YgQrENUQISpiFCjZjUuBfI+XCpv10l61zzBclcBEK260hpDgbwKz0tZOypZHE7M6cWw2olj6COtHO18E4AcozZGbAyYrdWd5+0YfKJ8B1cbaUTllMFqbDifQbTWGEB3qgHkqJColKiOmAvtiM65tsib2aRPf9pppkDc/idpYzXnsSvncu/eMil/IJxGC19UNwRfcLWY+UdrAESJRqeMaphbxD7OnsBD0rYaAHkZXmEX6Xp1gMGd/Uo8QQyxWKdJnTUA+uW8T2qr73woFFGKPQXIpoEvphTfjn+tio2oLkaOb8OLpN6xTv4jgLHcDv8/BTClwC8564IhvDr3rAAAAABJRU5ErkJggg==',
            className: 'import_icon'
        },
        {
            type: 'condition',
            label: '条件判断',
            text: '',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=',
        },
        {
            label: '文本',
            type: 'text',
            text: '文本',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAaBJREFUaEPtV71KxEAQ/uZEsLKwu4tgaauNYKeVL2Fjq7XVQbIXsLHX2kYQfAGttLPU1lJIvM4XEBnZg0CIUSa7icnCpAwzs9/PzP4QAv8ocPxQAn07qA6oA54KaAt5Cuidrg54S+hZQB3wFNA7vZEDawmvrgBTAna8V64pwITbEXCTGfqQ1m9EYBzzwYhwJy3uEkeMwyyla2luIwKTmA0REhCOckNX0kUkcZOYT4lwzozZe0pGkmNjnAgQYT8z9ChdRBK3bniPGQ+9ErAgJGDryPdOIDK8BcazhAAI27mhl3Js7wTKAApgi3kBYNui/K+uBQdFoBjCKGG2wPMZLWat2AQGScACtCqW+7tKoC6mcKZ3B+p6v47AbzOiBCS7x189rA4M4SCruqAzIOjrTu5C9tZKwG75IGPgaZ7SfRC7UJTwBYDjCtjLfEYnQRDYOOPx1yc2y2CXlvH6NqV5EAQErfsj5F8PsmAfNME/KYN/1Lv0dtc5jc6BrsG41FcCLqq1maMOtKmmSy11wEW1NnPUgTbVdKmlDrio1mZO8A58A4IxdEB6U+t2AAAAAElFTkSuQmCC',
            callback: () => {
                console.log('callback')
            }
        },
        {
            type: 'subProcess',
            text: '',
            label: '子流程',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAURJREFUWEftVtFRwzAMlWZoskTph5mAdghYAXMMQToEh1mBDkE6Af5ou0TSGURMk14a5EqUy7Uc8a+fpecn6dkIZ16ozX99vx0T0rMGj4SPH6+jjQqrAQWMscUUAN91eJp5l+YarFqBDoFY8Okuae8Evic4JDgQGBToXQE49xRIE96DAhEnrOf+UJFenLB751PnvhtH7YT/j4CxZXh4mhpLXSft594lMw4ULcElEcir120pXZHfx5taxV8pED0skWqp+AcIGFtk1Y8nSNZeoQm7tlt4l9xxtze2fAOAVI5BS+/SLOD2TfiTpvMuYZvX2JKkstT7+5JwBI795b7GUkFAinGcADezdYmedARo3kjcVoRrSlaBgcCgQNx6Ud2EWmu+KB8ILnYrGgni2r+MJqwTPmxXQHQlxgBYNG568o9IkUQF+QTaiEcwvdLyewAAAABJRU5ErkJggg==',
        },
        {
            type: 'end',
            text: '',
            label: '结束节点',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC',
        }
    ]
}