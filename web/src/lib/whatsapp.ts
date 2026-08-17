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
 * Marcadores del SELECTOR DE CONTACTO (Sesion 19).
 *
 * POR QUE SON UN TIPO APARTE Y NO CINCO MIEMBROS MAS DE `TokenBG`.
 * Los dos juegos responden preguntas distintas y no se pueden mezclar:
 *   TokenBG   dice DESDE QUE PAGINA salio el lead.
 *   TokenCTA  dice QUE ELIGIO el lead en el selector.
 * Un lead que sale del hero de /seguros/auto llega como [BG-AUTO]; uno que
 * eligio "Mi carro" en el selector llega como [BG-CTA-AUTO]. Si vivieran en
 * la misma union, `<Header token={...} />` aceptaria un BG-CTA-* sin chistar
 * y el dato se ensuciaria en silencio: el compilador ya no podria distinguir
 * origen de eleccion. Separados, el tipo es el que impide la confusion.
 */
export type TokenCTA =
  | "BG-CTA-AUTO"
  | "BG-CTA-VIDA"
  | "BG-CTA-SALUD"
  | "BG-CTA-INVERSION"
  | "BG-CTA-EXPLORA";

/** Cualquiera de los dos juegos sirve para armar un enlace. */
export type Token = TokenBG | TokenCTA;

/**
 * Texto canonico de cada opcion del selector. Vive aca y no en el componente
 * por el mismo motivo que el numero: es el contenido que Aurora va a leer del
 * otro lado, asi que tiene un solo dueno. El marcador NO se escribe aca; lo
 * agrega `enlaceWhatsApp`, que es quien sabe como se compone el texto final.
 */
export const MENSAJES_CTA: Record<TokenCTA, string> = {
  "BG-CTA-AUTO": "Hola, quiero cotizar el seguro de mi vehículo.",
  "BG-CTA-VIDA": "Hola, quiero información sobre seguro de vida para mi familia.",
  "BG-CTA-SALUD": "Hola, quiero información sobre seguro de salud.",
  "BG-CTA-INVERSION": "Hola, quiero información sobre inversión y patrimonio.",
  "BG-CTA-EXPLORA": "Hola, todavía no sé qué me conviene y quiero conversarlo.",
};

/**
 * Arma el enlace. Si se pasa `token`, se agrega al FINAL del mensaje separado
 * por un espacio, y todo el conjunto se codifica junto: los corchetes salen
 * como %5B y %5D y WhatsApp los restituye tal cual al abrir el chat.
 */
export function enlaceWhatsApp(mensaje: string, token?: Token): string {
  const texto = token ? `${mensaje} [${token}]` : mensaje;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

/**
 * Atajo del selector: dado el marcador, arma el enlace con SU mensaje.
 * Que el componente no pueda elegir el texto es deliberado — es la garantia
 * de que cada tarjeta lleva exactamente un marcador y el que le corresponde.
 */
export function enlaceCTA(token: TokenCTA): string {
  return enlaceWhatsApp(MENSAJES_CTA[token], token);
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
