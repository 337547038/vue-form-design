export default (callback: any) => {
  return [
    {
      label: '选区',
      className: 'react-icon',
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
      className: 'start-icon',
    },
    {
      type: 'userTask',
      label: '用户任务',
      text: '用户任务',
      //icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
      className: 'user-icon'
    },
    {
      type: 'sysTask',
      label: '系统任务',
      text: '系统任务',
      //icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAkZJREFUWEft1kuITmEcx/HPs7GTjKQotyi5lMsU21mhDAuZspEUio1IE6kxCxspCyS3lR1lIWUlFsJGSiFJkhpNEQuTknqc/8yZC+Z955xpNKl56vTWeZ/n//8+v//tJJO80iT7NwXwvyqQt2A+ZuAjPpDujSefaiqQ5+AcduA7XmN16bibdLIuRA2A3ILP+IpuXCH1kZfgYPH+EHpI8+pA1AG4jXZSgzP9IG8G4KorURFg6PZjGM930UJaX1WFqgDLi7i/QCvpaWPj+QiOk2ZNNMAGPMYK0ssmAAdwijRzogGi5N7jMOlsE4AbWEpaM9EA0/AWvaTW0Y0P5cll0v4JBghzeQ+u4UGZ6fFbrry72NCFhY2rZHSkikk45CgaUMgc6xm+Ff0g6n5xmaQdzXPkb4i6AOcRbXjBKPeJKrk58DRL1N9PVgTIm0v5I7tv4QLp0YgQrENUQISpiFCjZjUuBfI+XCpv10l61zzBclcBEK260hpDgbwKz0tZOypZHE7M6cWw2olj6COtHO18E4AcozZGbAyYrdWd5+0YfKJ8B1cbaUTllMFqbDifQbTWGEB3qgHkqJColKiOmAvtiM65tsib2aRPf9pppkDc/idpYzXnsSvncu/eMil/IJxGC19UNwRfcLWY+UdrAESJRqeMaphbxD7OnsBD0rYaAHkZXmEX6Xp1gMGd/Uo8QQyxWKdJnTUA+uW8T2qr73woFFGKPQXIpoEvphTfjn+tio2oLkaOb8OLpN6xTv4jgLHcDv8/BTClwC8564IhvDr3rAAAAABJRU5ErkJggg==',
      className: 'sys-icon'
    },
    {
      type: 'condition',
      label: '条件判断',
      text: '',
      className: 'condition-icon'
      // icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=',
    },
    {
      label: '文本',
      type: 'text',
      text: '文本',
      className: 'text-icon',
      callback: () => {
        console.log('callback')
      }
    },
    {
      type: 'subProcess',
      text: '',
      label: '子流程',
      className: 'subprocess-icon'
    },
    {
      type: 'end',
      text: '',
      label: '结束节点',
      className: 'end-icon'
    }
  ]
}