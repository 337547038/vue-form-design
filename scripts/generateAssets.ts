import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import type {Plugin} from 'vite';

/**
 * Vite 插件：自动复制 iconfont + 生成图片清单 JSON
 */
export default function generateAssetsPlugin(): Plugin {
  return {
    name: 'generate-assets',
    // 服务启动时执行一次
    async buildStart() {
      try {
        await copyIconfont();
        await generateImagesJson();
        //console.log('\n✅ 资源文件生成完成：iconfont + 图片清单');
      } catch (err) {
        console.error('❌ 资源生成失败：', err);
      }
    },
  };
}

/**
 * 1. 复制 iconfont.json 到指定目录
 */
async function copyIconfont() {
  // 源文件路径
  const sourcePath = path.resolve(
      process.cwd(),
      'public/static/iconfont/iconfont.json'
  );
  // 目标路径
  const targetDir = path.resolve(process.cwd(), 'src/components/diyIconfont');
  const targetPath = path.join(targetDir, 'iconfont.json');

  // 目标目录不存在则创建
  if (!fsSync.existsSync(targetDir)) {
    await fs.mkdir(targetDir, {recursive: true});
  }

  // 复制文件
  await fs.copyFile(sourcePath, targetPath);
  console.log('✅ iconfont.json 复制成功');
}

/**
 * 2. 扫描图片并生成 imagesFile.json
 */
async function generateImagesJson() {
  const imagesDir = path.resolve(process.cwd(), 'public/static/screen');
  const outputPath = path.resolve(process.cwd(), 'src/components/screen/imagesFile.json');
  const outputDir = path.dirname(outputPath);

  if (!fsSync.existsSync(outputDir)) await fs.mkdir(outputDir, {recursive: true});

  // 支持的图片格式
  const imgExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp'];
  const paths: string[] = [];

  // 递归读取目录
  async function scanDir(dir: string) {
    if (!fsSync.existsSync(dir)) return;

    const files = await fs.readdir(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await scanDir(fullPath); // 递归子目录
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imgExts.includes(ext)) {
          // 生成 /static/images/xxx/xxx.png 格式路径
          const relativePath = path.relative(imagesDir, fullPath);
          const publicPath = `/static/screen/${relativePath.replace(/\\/g, '/')}`;
          paths.push(publicPath);
        }
      }
    }
  }

  await scanDir(imagesDir);

  // 写入 JSON（仅路径数组）
  await fs.writeFile(outputPath, JSON.stringify(paths, null, 2), 'utf-8');
  console.log('✅ imagesFile.json 生成成功');
}