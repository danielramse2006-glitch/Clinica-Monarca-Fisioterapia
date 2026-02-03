
import React from 'react';

export const GitHubGuide: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-neon italic text-3xl font-black mb-6">Guía: Cómo subir tu página a GitHub</h2>
      
      <div className="space-y-8 text-zinc-300">
        <section>
          <h3 className="text-white font-bold text-xl mb-2 flex items-center">
            <span className="bg-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
            Prepara tu código
          </h3>
          <p>Asegúrate de que todos los archivos (index.html, App.tsx, etc.) estén en una sola carpeta en tu computadora.</p>
        </section>

        <section>
          <h3 className="text-white font-bold text-xl mb-2 flex items-center">
            <span className="bg-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
            Crea un Repositorio en GitHub
          </h3>
          <ul className="list-disc ml-10 space-y-1">
            <li>Ve a <a href="https://github.com" target="_blank" className="text-neon underline">GitHub.com</a> e inicia sesión.</li>
            <li>Haz clic en el botón <strong>"+"</strong> (arriba a la derecha) y selecciona <strong>"New repository"</strong>.</li>
            <li>Ponle un nombre (ej: <code>monarca-web</code>).</li>
            <li>Déjalo como <strong>Public</strong> y haz clic en <strong>"Create repository"</strong>.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-white font-bold text-xl mb-2 flex items-center">
            <span className="bg-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
            Sube los archivos (Método Fácil)
          </h3>
          <p>En la pantalla que aparece, busca el enlace que dice <strong>"uploading an existing file"</strong>.</p>
          <p className="bg-zinc-800 p-4 rounded-lg mt-2 italic text-sm border-l-4 border-neon">
            Arrastra todos tus archivos directamente al recuadro de GitHub. Luego haz clic en el botón verde "Commit changes".
          </p>
        </section>

        <section>
          <h3 className="text-white font-bold text-xl mb-2 flex items-center">
            <span className="bg-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">4</span>
            ¡Hazla pública con GitHub Pages!
          </h3>
          <ul className="list-disc ml-10 space-y-1">
            <li>Ve a la pestaña <strong>"Settings"</strong> de tu repositorio.</li>
            <li>En el menú de la izquierda, busca <strong>"Pages"</strong>.</li>
            <li>En "Branch", selecciona <strong>"main"</strong> y la carpeta <strong>"/(root)"</strong>.</li>
            <li>Haz clic en <strong>"Save"</strong>.</li>
          </ul>
          <p className="mt-4 text-neon font-bold">¡Listo! En unos minutos tu web estará en vivo en: <br/><code className="text-white">https://tu-usuario.github.io/tu-repo/</code></p>
        </section>
      </div>
    </div>
  );
};
