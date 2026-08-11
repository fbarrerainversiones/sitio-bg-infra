/**
 * Enlaces de WhatsApp — fuente unica.
 *
 * Antes de la Sesion 18 el numero estaba duplicado como constante local en
 * OCHO archivos (index, Header, Footer, sobre-mi, PorticoConstruye, contacto,
 * 404 y ProductLayout). Un cambio de numero exigia ocho ediciones y cualquier
 * olvido mandaba leads a un telefono viejo sin que nada fallara.
 *
 * ATRIBUCION DE LEADS — por que va DENTRO del texto y no en la URL.
 * Acordado con el canal Aurora el 11/08/2026: `wa.me` solo respeta `phone` y
 * `text`. Cualquier `utm_*` que se cuelgue del enlace se pierde: no llega al
 * mensaje, no llega a Aurora, no llega a ningun lado. Lo unico que sobrevive
 * el salto a la aplicacion es el TEXTO PRE-RELLENADO. Por eso el marcador
 * viaja al final de ese texto, entre corchetes, y Aurora lo lee del mensaje.
 * (Ya estaba documentado que el home no usa UTM; esto lo formaliza.)
 */

/** El de produccion. No se cambia sin decision explicita de Francisco. */
export const WHATSAPP_NUMERO = "593998027819";

/** Marcadores de atribucion. Uno por pagina, estable, en MAYUSCULAS. */
export type TokenBG =
  | "BG-HOME"
  | "BG-SOBRE-MI"
  | "BG-AUTO"
  | "BG-VIDA-TERMINO"
  | "BG-VIDA-INDEXADA"
  | "BG-SALUD-NACIONAL"
  | "BG-SALUD-INTERNACIONAL"
  | "BG-INVERSION";

/**
 * Arma el enlace. Si se pasa `token`, se agrega al FINAL del mensaje separado
 * por un espacio, y todo el conjunto se codifica junto: los corchetes salen
 * como %5B y %5D y WhatsApp los restituye tal cual al abrir el chat.
 */
export function enlaceWhatsApp(mensaje: string, token?: TokenBG): string {
  const texto = token ? `${mensaje} [${token}]` : mensaje;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

/**
 * Deriva el marcador del slug de una pagina de producto. Los seis slugs
 * (auto, vida-termino, vida-indexada, salud-nacional, salud-internacional,
 * inversion) dan exactamente los seis marcadores acordados al pasarlos a
 * mayusculas, asi que no hace falta una tabla que se pueda desincronizar.
 */
export function tokenDeSlug(slug: string): TokenBG {
  return `BG-${slug.toUpperCase()}` as TokenBG;
}
