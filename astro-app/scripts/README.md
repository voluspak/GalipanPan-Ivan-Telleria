# Scripts de Automatización

Este directorio contiene scripts para automatizar tareas del proyecto.

## 🚀 run-dev.sh

Script que ejecuta automáticamente los tests antes de iniciar el servidor de desarrollo.

### ¿Qué hace?

1. **Ejecuta todos los tests** (`pnpm test`)
2. **Verifica el resultado:**
   - ✅ Si pasan: Inicia el servidor de desarrollo
   - ❌ Si fallan: Muestra error y detiene el proceso

### ¿Cómo usarlo?

```bash
# Comando principal (ejecuta tests automáticamente)
pnpm dev

# Omitir tests (desarrollo rápido)
pnpm dev:skip-tests
```

### Salida del script

#### ✅ Tests exitosos:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🧪 Ejecutando tests antes de iniciar el servidor...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ src/tests/components.test.ts (20 tests) 4ms
✓ src/tests/pages.test.ts (11 tests) 5ms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✅ Todos los tests pasaron correctamente
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Iniciando servidor de desarrollo...
```

#### ❌ Tests fallidos:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🧪 Ejecutando tests antes de iniciar el servidor...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[errores de tests aquí]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ❌ Los tests fallaron
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Corrige los errores antes de continuar
💡 O usa 'pnpm dev:skip-tests' para omitir tests
```

### Beneficios

- ✅ **Calidad garantizada:** No puedes iniciar el servidor con código roto
- ✅ **Feedback inmediato:** Detecta problemas antes de desarrollar
- ✅ **Prevención de bugs:** Los tests se ejecutan automáticamente
- ✅ **Flexibilidad:** Puedes omitir tests si necesitas desarrollo rápido

### Cuándo usar cada comando

| Comando | Cuándo usarlo |
|---------|---------------|
| `pnpm dev` | Desarrollo normal, quieres asegurar calidad |
| `pnpm dev:skip-tests` | Pruebas rápidas, experimentación |
| `pnpm test` | Solo ejecutar tests sin servidor |
| `pnpm test:watch` | Desarrollo TDD (Test Driven Development) |

## 🛠️ Personalización

El script usa colores para mejor visualización:
- 🔵 **Azul**: Información
- 🟢 **Verde**: Éxito
- 🔴 **Rojo**: Error
- 🟡 **Amarillo**: Advertencias

Si necesitas modificar el comportamiento, edita `run-dev.sh`.
