const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabaseConfig() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing Supabase configuration. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return { supabaseUrl, supabaseServiceRoleKey };
}

async function parseError(response: Response) {
  const text = await response.text();

  try {
    const data = JSON.parse(text) as { message?: string; error?: string };
    return data.message || data.error || text;
  } catch {
    return text;
  }
}

export async function insertSupabaseRow(
  table: string,
  payload: Record<string, unknown>
) {
  const { supabaseUrl: url, supabaseServiceRoleKey: key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

export async function upsertSupabaseRow(
  table: string,
  payload: Record<string, unknown>,
  onConflict: string
) {
  const { supabaseUrl: url, supabaseServiceRoleKey: key } = getSupabaseConfig();
  const endpoint = `${url}/rest/v1/${table}?on_conflict=${encodeURIComponent(onConflict)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

