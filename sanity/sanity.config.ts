import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'culturalia',
  title: 'Culturalia — Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'PREENCHER_DEPOIS',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
