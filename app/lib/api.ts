export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", // kita set no-store karena kita ingin mendapatkan data lebih real time atau lebih updated
  });

  if (!res.ok) {
    let errorMassage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMassage = errorData.message || errorData.error || errorMassage;
    } catch (e) {
      console.log(e);
    }

    throw new Error(errorMassage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

export function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
}
